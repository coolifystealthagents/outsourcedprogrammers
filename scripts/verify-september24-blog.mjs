import fs from 'node:fs';
import crypto from 'node:crypto';

const source = fs.readFileSync('app/september24-blog-batch.ts', 'utf8');
const data = fs.readFileSync('app/data.ts', 'utf8');
const renderer = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const slugMatches = [...source.matchAll(/slug:'([^']+)'/g)].map((match) => match[1]);
const slugs = [...new Set(slugMatches)];
if (slugs.length !== 12) throw new Error(`expected 12 unique slugs, found ${slugs.length}`);
if (!source.includes("published:'2026-09-24'")) throw new Error('publication date missing');
if (!data.includes('...september24BlogBatch') || !data.includes('...september24BlogDetails')) throw new Error('batch is not wired into data');
if (!renderer.includes('datePublished: post.published') || !renderer.includes('<time dateTime={post.published}>')) throw new Error('published date is not wired to schema and visible time');

for (const slug of slugs) {
  const htmlPath = `.next/server/app/blog/${slug}.html`;
  if (!fs.existsSync(htmlPath)) throw new Error(`missing built article: ${slug}`);
  const html = fs.readFileSync(htmlPath, 'utf8');
  const visible = html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&[^;]+;/g, ' ');
  const words = visible.trim().split(/\s+/).filter(Boolean).length;
  if (words < 900) throw new Error(`${slug} has only ${words} rendered words`);
  const canonical = `https://outsourcedprogrammers.com/blog/${slug}`;
  if (!html.includes(canonical)) throw new Error(`missing canonical: ${slug}`);
  if (!html.includes('2026-09-24')) throw new Error(`missing rendered publication date: ${slug}`);
  const hash = crypto.createHash('sha256').update(html).digest('hex');
  console.log(`${slug}\t${words}\t${hash}`);
}
console.log('PASS: exactly 12 September 24 Blog articles build with 900+ rendered words, canonical URLs, and matching visible/structured publication dates.');
