import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=path.resolve(import.meta.dirname,'../..'), errors=[];
const ok=(x,m)=>{if(!x)errors.push(m)};
const read=f=>fs.readFileSync(path.join(root,f),'utf8');
const blogSource=read('app/october12-blog-batch.ts');
const summaryMark=blogSource.indexOf('export const october12BlogBatch');
const summaryStart=blogSource.indexOf('[',blogSource.indexOf('=',summaryMark));
const summaryEnd=blogSource.indexOf('] as const;',summaryStart);
const blogs=JSON.parse(blogSource.slice(summaryStart,summaryEnd+1));
const detailMark=blogSource.indexOf('export const october12BlogDetails');
const detailStart=blogSource.indexOf('{',blogSource.indexOf('=',detailMark));
const detailEnd=blogSource.lastIndexOf('};');
const details=JSON.parse(blogSource.slice(detailStart,detailEnd+1));
const researchSource=read('app/october12-research-batch.ts');
const researchStart=researchSource.indexOf('[',researchSource.indexOf('=',researchSource.indexOf('export const october12ResearchBatch')));
const research=JSON.parse(researchSource.slice(researchStart,researchSource.lastIndexOf(']')+1));
const manifest=JSON.parse(read('publishing/2026-10-12/manifest.json'));
const unique=v=>new Set(v).size===v.length;
const all=[...blogs,...research];

ok(blogs.length===12,`expected 12 Blog items; found ${blogs.length}`);
ok(research.length===5,`expected 5 Research items; found ${research.length}`);
ok(Object.keys(details).length===12,`expected 12 Blog detail records; found ${Object.keys(details).length}`);
ok(manifest.date==='2026-10-12'&&manifest.blog.length===12&&manifest.research.length===5,'manifest date or counts are wrong');
ok(unique(all.map(x=>x.slug)),'new slugs must be unique');
ok(unique(all.map(x=>x.title)),'new titles must be unique');
ok(all.every(x=>x.published==='2026-10-12'),'all publication dates must be 2026-10-12');
ok(all.every(x=>!/(^|\s)(2026|oct(?:ober)?\s+12|10[-/]12)(\s|$|:)/i.test(x.title)),'titles must be date-free');

for(const p of blogs){
 const d=details[p.slug]; ok(d,`${p.slug}: detail record missing`); if(!d)continue;
 ok(d.sections?.length===7,`${p.slug}: expected 7 structured sections`);
 ok(d.sections?.every(s=>s.paragraphs.length>=2),`${p.slug}: every Blog section needs at least 2 paragraphs`);
 ok(d.takeaways?.length===4,`${p.slug}: expected 4 takeaways`);
 ok(d.readinessRows?.length===4,`${p.slug}: readiness table is incomplete`);
 ok(d.roleBrief?.length>=6,`${p.slug}: role brief is incomplete`);
 ok(d.sources?.length>=4&&d.sources.every(s=>/^https:\/\//.test(s.url)),`${p.slug}: needs 4 HTTPS sources`);
 ok(d.internalLinks?.some(x=>x.url==='/blog')&&d.internalLinks.some(x=>x.url==='/research'),`${p.slug}: Blog/Research related links missing`);
 ok(d.heroImage===`/oct12/blog/${p.slug}.png`,`${p.slug}: Blog thumbnail path mismatch`);
}
const researchSlugs=new Set(research.map(x=>x.slug));
for(const p of research){
 ok(p.body?.length>=16,`${p.slug}: Research requires at least 16 substantive paragraphs`);
 ok(p.sources?.length>=10&&p.sources.every(([,url])=>/^https:\/\//.test(url)),`${p.slug}: Research requires 10 authoritative HTTPS sources`);
 ok(p.related?.length===3&&p.related.every(x=>researchSlugs.has(x)&&x!==p.slug),`${p.slug}: Research related links are invalid`);
 ok(p.hero===`/oct12/research/${p.slug}.png`,`${p.slug}: Research thumbnail path mismatch`);
 ok(p.nextStep?.href==='/contact',`${p.slug}: Research next step missing`);
}

const data=read('app/data.ts'), fleet=read('app/fleet-content.ts');
ok(data.includes("import { october12BlogBatch, october12BlogDetails } from './october12-blog-batch';"),'Blog loader import missing');
ok((data.match(/\.\.\.october12BlogBatch/g)||[]).length===1,'Blog batch must load exactly once');
ok((data.match(/\.\.\.october12BlogDetails/g)||[]).length===1,'Blog details must load exactly once');
ok(fleet.includes("import { october12ResearchBatch } from './october12-research-batch';"),'Research loader import missing');
ok((fleet.match(/\.\.\.october12ResearchBatch/g)||[]).length===1,'Research batch must load exactly once');
ok((fleet.match(/export const researchPosts/g)||[]).length===1,'Research registry must have exactly one export');
ok((fleet.match(/\.\.\.october8ResearchBatch/g)||[]).length===1&&(fleet.match(/\.\.\.october9ResearchBatch/g)||[]).length===1,'prior Research batches must each remain loaded once');
const blogRoute=read('app/blog/[slug]/page.tsx'), researchRoute=read('app/research/[slug]/page.tsx');
ok(blogRoute.includes('<time dateTime={post.published}>'),'Blog route does not render the visible publication date');
ok(researchRoute.includes('<time dateTime={publishedDate}>'),'Research route does not render the visible publication date');
ok(blogRoute.includes('detail.internalLinks'),'Blog related/sidebar system is not rendered');
ok(researchRoute.includes('post.related'),'Research related system is not rendered');
ok(fs.existsSync(path.join(root,'app/blog/page.tsx'))&&fs.existsSync(path.join(root,'app/research/page.tsx')),'Blog or Research index is missing');
ok(read('app/sitemap.xml/route.ts').includes('blogPosts.map')&&read('app/sitemap.xml/route.ts').includes('researchPosts.map'),'sitemap does not map both systems');

const images=[], manifestThumbs=[...manifest.blog,...manifest.research].map(x=>x.thumbnail);
ok(unique(manifestThumbs)&&manifestThumbs.length===17,'manifest needs 17 unique thumbnail paths');
for(const [index,p] of all.entries()){
 const route=index<12?details[p.slug].heroImage:p.hero;
 const file=path.join(root,'public',route.replace(/^\//,''));
 ok(fs.existsSync(file),`${p.slug}: thumbnail missing`); if(!fs.existsSync(file))continue;
 const b=fs.readFileSync(file), width=b.readUInt32BE(16), height=b.readUInt32BE(20);
 ok(b.toString('ascii',1,4)==='PNG',`${p.slug}: thumbnail is not PNG`);
 ok(index<12?(width===1672&&height===941):(width===1536&&height===1024),`${p.slug}: thumbnail dimensions ${width}x${height} do not match section convention`);
 images.push(crypto.createHash('sha256').update(b).digest('hex'));
}
ok(images.length===17&&unique(images),'all 17 thumbnails must be unique files');

const prose=[];
for(const p of blogs)prose.push(...details[p.slug].sections.flatMap(x=>x.paragraphs));
for(const p of research)prose.push(...p.body);
const norm=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const substantive=prose.filter(x=>norm(x).split(' ').length>=25), seen=new Set();
for(const text of substantive){const key=norm(text);if(seen.has(key))errors.push(`duplicate substantive paragraph: ${text.slice(0,85)}...`);seen.add(key)}
const oldFiles=fs.readdirSync(path.join(root,'app')).filter(x=>/\.(ts|tsx)$/.test(x)&&!['october12-blog-batch.ts','october12-research-batch.ts'].includes(x));
const oldText=oldFiles.map(x=>read(`app/${x}`)).join('\n');
for(const text of substantive)ok(!oldText.includes(text),`new prose exactly duplicates existing content: ${text.slice(0,85)}...`);
for(const p of all){const count=(oldText.match(new RegExp(`["']${p.slug}["']`,'g'))||[]).length;ok(count===0,`${p.slug}: slug already exists ${count} time(s) outside the new batch`)}

if(errors.length){console.error(`FAIL (${errors.length})`);errors.forEach(e=>console.error(`- ${e}`));process.exit(1)}
console.log('PASS: 12 Blog + 5 Research, visible dates, separate systems, routes/indexes/related links, source depth, unique prose, and 17 exact-title thumbnails verified.');
