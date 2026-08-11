import fs from 'node:fs';

const manifestPath = '.paperclip/aug10-2026/blog.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const source = fs.readFileSync('app/data.ts', 'utf8');
const renderer = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
const listing = fs.readFileSync('app/blog/blog-listing.tsx', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
const fail = (message) => { throw new Error(message); };

if (manifest.entries.length < manifest.minimum || manifest.entries.length !== 22) fail('manifest count');
const seen = new Set();
for (const entry of manifest.entries) {
  if (seen.has(entry.slug)) fail('duplicate slug: ' + entry.slug);
  seen.add(entry.slug);
  if (!entry.route.startsWith('/blog/') || entry.route !== '/blog/' + entry.slug) fail('family route: ' + entry.slug);
  const record = new RegExp('slug: ["\']' + entry.slug + '["\'][\\s\\S]*?published: ["\']([^"\']+)["\']').exec(source);
  if (!record) fail('missing source record: ' + entry.slug);
  if (record[1] !== '2026-08-10' || entry.sourceDate !== '2026-08-10') fail('source date: ' + entry.slug);
  if (entry.sourcePath !== 'app/data.ts' || entry.sourceDateField !== 'published') fail('source trace: ' + entry.slug);
  if (!renderer.includes('datePublished: post.published') || !renderer.includes('<time dateTime={post.published}>')) fail('render date fields: ' + entry.slug);
  if (entry.renderedDate !== '2026-08-10') fail('rendered date: ' + entry.slug);
  if (!renderer.includes('alternates: { canonical: url }')) fail('canonical: ' + entry.slug);
  if (!sitemap.includes('blogPosts.map(p=>`/blog/${p.slug}` )'.replace(' )',''))) fail('sitemap: ' + entry.slug);
}
if (!listing.includes('[...blogPosts].sort') || !listing.includes('b.published')) fail('index is not newest-first');
if (manifest.cleanBuildPassed !== true || manifest.existingCompliancePassed !== true || manifest.indexNewestFirstPassed !== true) fail('manifest gates');
console.log('PASS: ' + manifest.entries.length + ' Blog entries dated 2026-08-10 with family routes, source records, rendered dates, canonical metadata, sitemap membership, and newest-first index.');
