import {NextRequest,NextResponse} from 'next/server';
import {sendLeadFallbackToMattermost} from '../../lib/lead-fallback-mattermost';

const MAX_BODY_BYTES=64_000;
const MAX_FIELD_LENGTH=4_000;
const EMAIL_RE=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WINDOW_MS=15*60_000;
const attempts=new Map<string,number[]>();

function text(form:URLSearchParams,key:string,max=MAX_FIELD_LENGTH){
  return (form.get(key)||'').trim().slice(0,max);
}
function errorPage(status:number){
  return new Response('<!doctype html><html lang="en"><meta charset="utf-8"><title>Submission problem</title><main><h1>We could not send your request.</h1><p>Please review the form and try again. If the problem continues, use the direct scheduling option.</p><a href="/contact-us">Return to the contact form</a></main>',{status,headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-store'}});
}
function ip(request:NextRequest){
  return request.headers.get('cf-connecting-ip')||request.headers.get('x-real-ip')||request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()||'unknown';
}
function limited(key:string,max:number){
  const now=Date.now();
  const recent=(attempts.get(key)||[]).filter(time=>now-time<WINDOW_MS);
  recent.push(now);
  attempts.set(key,recent);
  if(attempts.size>5_000)for(const [candidate,values] of attempts)if(!values.some(time=>now-time<WINDOW_MS))attempts.delete(candidate);
  return recent.length>max;
}
async function readLimitedUrlEncoded(request:NextRequest){
  if(!request.body)return new URLSearchParams();
  const reader=request.body.getReader();
  const chunks:Uint8Array[]=[];
  let total=0;
  while(true){
    const {done,value}=await reader.read();
    if(done)break;
    total+=value.byteLength;
    if(total>MAX_BODY_BYTES){await reader.cancel();return null}
    chunks.push(value);
  }
  const bytes=new Uint8Array(total);
  let offset=0;
  for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.byteLength}
  return new URLSearchParams(new TextDecoder().decode(bytes));
}

export async function POST(request:NextRequest){
  const contentType=request.headers.get('content-type')||'';
  const declaredLength=Number(request.headers.get('content-length')||0);
  const origin=request.headers.get('origin');
  const allowedOrigins=new Set([request.nextUrl.origin,'https://outsourcedprogrammers.com','https://www.outsourcedprogrammers.com']);
  if((origin&&!allowedOrigins.has(origin))||!Number.isFinite(declaredLength)||declaredLength>MAX_BODY_BYTES||!contentType.includes('application/x-www-form-urlencoded'))return errorPage(400);
  if(limited(`ip:${ip(request)}`,10))return errorPage(429);
  let form:URLSearchParams|null;
  try{form=await readLimitedUrlEncoded(request)}catch{return errorPage(400)}
  if(!form)return errorPage(413);
  if(text(form,'websiteConfirm')||text(form,'website_confirm')||text(form,'website_url')||text(form,'company_homepage'))return errorPage(400);

  const first=text(form,'firstName',100);
  const last=text(form,'lastName',100);
  const email=text(form,'email',320).toLowerCase();
  const phone=text(form,'phone',100);
  const company=text(form,'company',300);
  const companySize=text(form,'companySize',100);
  const preferredContact=text(form,'preferredContact',100);
  const source=text(form,'source',300);
  const positions=text(form,'positions');
  const needs=text(form,'needs');
  const privacy=text(form,'privacy',20);
  if(!first||!last||!email||!EMAIL_RE.test(email)||!phone||!company||!companySize||!preferredContact||!source||!positions||!needs||privacy!=='accepted')return errorPage(422);
  if(limited(`email:${email}`,3))return errorPage(429);

  const name=`${first} ${last}`;
  const pageUrl=request.headers.get('referer')||new URL('/contact-us',request.url).toString();
  const message=[needs,`Preferred contact: ${preferredContact}`,`Positions: ${positions}`,`Company size: ${companySize}`,text(form,'website',300)].filter(Boolean).join('\n');
  const fallbackLead={name,email,phone,business:company,message,companySize,positions,referral:source,pageUrl,userAgent:request.headers.get('user-agent')||undefined};
  const payload={full_name:name,email,phone,company_name:company,message,how_they_heard:source,client_event_id:crypto.randomUUID(),attribution:{source_page:pageUrl,landing_page:pageUrl,referrer:request.headers.get('referer')||'',page_journey:['Programming work-lane form']}};
  const token=process.env.LEAD_AUTH_TOKEN;
  const endpoint=process.env.LEAD_INGEST_URL||'https://leads.stealthagents.com/api/leads';
  if(!token){await sendLeadFallbackToMattermost(fallbackLead);return errorPage(503)}
  try{
    const upstream=await fetch(endpoint,{method:'POST',headers:{'content-type':'application/json','x-lead-token':token},body:JSON.stringify(payload),cache:'no-store',signal:AbortSignal.timeout(12_000)});
    const result=await upstream.json().catch(()=>null) as {ok?:boolean}|null;
    if(!upstream.ok||result?.ok!==true){await sendLeadFallbackToMattermost(fallbackLead);return errorPage(502)}
  }catch{
    await sendLeadFallbackToMattermost(fallbackLead);
    return errorPage(502);
  }
  return NextResponse.redirect(new URL('/thank-you',request.url),303);
}
