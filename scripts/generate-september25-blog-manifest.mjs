import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';

const commitSha = process.argv[2];
if (!/^[0-9a-f]{40}$/.test(commitSha || '')) throw new Error('Pass the full Blog content commit SHA');
const scratch = process.env.PAPERCLIP_RUN_SCRATCH_DIR;
if (!scratch) throw new Error('PAPERCLIP_RUN_SCRATCH_DIR is required');
const compiled = path.join(scratch, 'september25-blog-manifest-compiled');
execFileSync('npx', ['tsc','--noEmit','false','--outDir',compiled,'--module','commonjs','--moduleResolution','node','--target','es2020','--esModuleInterop','app/data.ts'], {stdio:'inherit'});
const require = createRequire(import.meta.url);
const { blogPosts, blogDetails } = require(path.join(compiled, 'data.js'));
const posts = blogPosts.filter((post) => post.published === '2026-09-25');
if (posts.length !== 12 || new Set(posts.map((post) => post.slug)).size !== 12) throw new Error(`Expected 12 unique Blog posts, found ${posts.length}`);
const entries = posts.map((post) => {
  const detail = blogDetails[post.slug];
  const words = [post.title,post.excerpt,...detail.takeaways,...detail.sections.flatMap((section) => [section.title,...section.paragraphs,...(section.bullets || [])]),...detail.faqs.flatMap((faq) => [faq.question,faq.answer])].join(' ').match(/\b[\w’'-]+\b/g)?.length || 0;
  if (words < 900) throw new Error(`${post.slug} has only ${words} substantive words`);
  return {topic:detail.sections[0].title.replace(/^Write the /,'').replace(/ decision before the ticket starts$/,''),slug:post.slug,sources:detail.sources.map((source) => source.url),contentHash:crypto.createHash('sha256').update(JSON.stringify({post,detail})).digest('hex'),publicationDate:post.published,contentCommit:commitSha,liveUrl:`https://outsourcedprogrammers.com/blog/${post.slug}`,verificationTime:null,wordCount:words};
});
const manifest = {schemaVersion:1,family:'blog',domain:'outsourcedprogrammers.com',repository:'coolifystealthagents/outsourcedprogrammers',productionBranch:'main',timezone:'UTC',publicationDate:'2026-09-25',requiredCount:12,contentCommit:commitSha,deploymentResource:'vbagj11m3mrgp0cuk6v07h28',deploymentId:null,deploymentStatus:'browser operator owns the single combined deployment',verifiedCount:0,entries};
const target = '.paperclip/daily-content/2026-09-25/blog.json';
fs.mkdirSync(path.dirname(target), {recursive:true});
fs.writeFileSync(target, `${JSON.stringify(manifest,null,2)}\n`);
console.log(`wrote ${target} with ${entries.length} entries`);
