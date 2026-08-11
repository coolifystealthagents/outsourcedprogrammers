import fs from 'node:fs';
import {execFileSync} from 'node:child_process';

const manifest=JSON.parse(fs.readFileSync('.paperclip/aug10-2026/research.json','utf8'));
const sourcePath='app/fleet-content.ts';
const source=fs.readFileSync(sourcePath,'utf8');
const renderer=fs.readFileSync('app/research/[slug]/page.tsx','utf8');
const index=fs.readFileSync('app/research/page.tsx','utf8');
const sitemap=fs.readFileSync('app/sitemap.xml/route.ts','utf8');
const fail=m=>{throw new Error(m)};
if(manifest.schemaVersion!==1||manifest.contract!=='sites3-aug10-public-date-v6')fail('manifest contract');
if(manifest.family!=='research'||manifest.domain!=='outsourcedprogrammers.com'||manifest.branch!=='main')fail('manifest identity');
if(manifest.entries.length<manifest.minimum||manifest.entries.length!==14)fail('manifest count');
if(manifest.cleanBuildPassed!==true||manifest.existingCompliancePassed!==true||manifest.indexNewestFirstPassed!==true)fail('manifest gates');
const seen=new Set();
for(const e of manifest.entries){
  if(seen.has(e.slug))fail('duplicate '+e.slug); seen.add(e.slug);
  if(!/^\/research\/[a-z0-9-]+$/.test(e.route)||e.route!==`/research/${e.slug}`)fail("route "+e.slug);
  if(e.sourcePath!==sourcePath||e.sourceDateField!=='published'||e.sourceDate!=='2026-08-10'||e.renderedDate!=='2026-08-10')fail('manifest entry '+e.slug);
  if(e.provenance!=='original-aug10-batch'||!/^[0-9a-f]{40}$/.test(e.introducedByCommit))fail('provenance metadata '+e.slug);
  const commitSource=execFileSync('git',['show',`${e.introducedByCommit}:${e.sourcePath}`],{encoding:'utf8'});
  const parent=execFileSync('git',['rev-parse',`${e.introducedByCommit}^`],{encoding:'utf8'}).trim();
  const parentSource=execFileSync('git',['show',`${parent}:${e.sourcePath}`],{encoding:'utf8'});
  if(!new RegExp(`['\\\\"]${e.slug}['\\\\"]`).test(commitSource))fail('missing at introducing commit '+e.slug);
  if(new RegExp(`['\\\\"]${e.slug}['\\\\"]`).test(parentSource))fail('not absent before introducing commit '+e.slug);
  if(!commitSource.includes("published:'2026-08-10'")&&!commitSource.includes('published:"2026-08-10"'))fail('source date '+e.slug);
}
if(!renderer.includes('datePublished:post.published')||!renderer.includes('time dateTime={post.published}'))fail('rendered date fields');
if(!renderer.includes('alternates:{canonical:`https://outsourcedprogrammers.com/research/${post.slug}`}'))fail('canonical metadata');
if(!sitemap.includes('researchPosts.map(p=>`/research/${p.slug}`'))fail('sitemap eligibility');
if(!index.includes('researchPosts.map'))fail('research index');
if(!source.includes(".sort((a,b) => (b.published || '').localeCompare(a.published || '')"))fail('newest-first source ordering');
const builtRoot='.next/server/app/research';
if(!fs.existsSync(builtRoot))fail('production build output missing; run npm run build first');
const builtFiles=[]; const walk=d=>{for(const name of fs.readdirSync(d)){const p=`${d}/${name}`;const s=fs.statSync(p);if(s.isDirectory())walk(p);else builtFiles.push(p)}}; walk(builtRoot);
for(const e of manifest.entries){const hits=builtFiles.filter(p=>fs.readFileSync(p,'utf8').includes(e.slug));if(!hits.some(p=>fs.readFileSync(p,'utf8').includes('2026-08-10')))fail('built/rendered article date '+e.slug)}
console.log(`PASS: ${manifest.entries.length} existing Research entries have Git provenance, source date, rendered date, canonical/sitemap coverage, built output, and newest-first ordering.`);
