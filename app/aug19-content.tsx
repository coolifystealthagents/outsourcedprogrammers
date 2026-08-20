import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import { Header, Footer, CTA } from './components';
import meta from './aug19-meta.json';
const SITE='https://outsourcedprogrammers.com';
type Family='blog'|'research';
type Item={family:Family,title:string,description:string,hero:string};
function item(slug:string):Item{return (meta as Record<string,Item>)[slug]}
function source(family:Family,slug:string){const raw=fs.readFileSync(path.join(process.cwd(),'content',family,slug+'.md'),'utf8');return raw.replace(/^---[\s\S]*?---\s*/,'').replace(/^#[^\n]+\n+/,'').replace(/^\*August 19, 2026\*\s*/,'')}
function blocks(text:string){return text.split(/\n\n+/).filter(Boolean).map((part,i)=>{if(part.startsWith('## '))return <h2 key={i}>{part.slice(3)}</h2>;if(part.startsWith('- '))return <ul key={i}>{part.split('\n').map((x,j)=><li key={j}>{x.replace(/^- /,'').replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'$1: $2')}</li>)}</ul>;return <p key={i}>{part}</p>})}
export function getAug19Metadata(family:Family,slug:string):Metadata{const x=item(slug);return {title:x.title,description:x.description,alternates:{canonical:`/${family}/${slug}`},openGraph:{title:x.title,description:x.description,url:`${SITE}/${family}/${slug}`,images:[x.hero]}}}
const serviceHandoffs: Record<string,{href:string;label:string;copy:string}>={
  'software-development-handoff-reliability-research':{
    href:'/services/devops-support',
    label:'Review DevOps support boundaries',
    copy:'For deployment, environment, or runbook handoffs, start with a narrow DevOps support lane and a named owner. Your technical owner keeps approval for infrastructure changes and production releases.'
  }
};
export function renderAug19Article(family:Family,slug:string){const x=item(slug);const handoff=family==='research'?serviceHandoffs[slug]:undefined;const schema={'@context':'https://schema.org','@type':'Article',headline:x.title,datePublished:'2026-08-19',dateModified:'2026-08-19',mainEntityOfPage:`${SITE}/${family}/${slug}`,image:`${SITE}${x.hero}`};return <><Header/><main className="article-shell"><article><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><p className="eyebrow">{family==='research'?'Research':'Blog'}</p><h1>{x.title}</h1><p><time dateTime="2026-08-19">August 19, 2026</time></p><img src={x.hero} alt={`${x.title} editorial illustration`} width="1536" height="1024" style={{width:'100%',height:'auto',borderRadius:'18px'}}/><div className="article-body">{blocks(source(family,slug))}</div>{handoff&&<section className="article-module related-panel"><p className="module-label">Next step</p><h2>Put the handoff plan into practice</h2><p>{handoff.copy}</p><a href={handoff.href}>{handoff.label}</a></section>}</article><CTA/></main><Footer/></>}
