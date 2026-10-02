import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';

const commitSha = process.argv[2];
if (!/^[0-9a-f]{40}$/.test(commitSha || '')) throw new Error('Pass the full Blog content commit SHA');
const scratch = process.env.PAPERCLIP_RUN_SCRATCH_DIR;
if (!scratch) throw new Error('PAPERCLIP_RUN_SCRATCH_DIR is required');
const compiled = path.join(scratch, 'october2-blog-manifest-compiled');
fs.rmSync(compiled, { recursive: true, force: true });
execFileSync(process.execPath, ['node_modules/typescript/bin/tsc', '--noEmit', 'false', '--outDir', compiled, '--module', 'commonjs', '--moduleResolution', 'node', '--target', 'es2020', '--esModuleInterop', 'app/data.ts'], { stdio: 'inherit' });
const require = createRequire(import.meta.url);
const { blogPosts, blogDetails } = require(path.join(compiled, 'data.js'));
const posts = blogPosts.filter((post) => post.published === '2026-10-02');
if (posts.length !== 12 || new Set(posts.map((post) => post.slug)).size !== 12) throw new Error(`Expected 12 unique Blog posts, found ${posts.length}`);

const wordsOf = (text) => text.toLowerCase().match(/\b[\w’'-]+\b/g) || [];
const shingles = (words) => new Set(Array.from({ length: Math.max(0, words.length - 4) }, (_, index) => words.slice(index, index + 5).join(' ')));
const entries = posts.map((post) => {
  const detail = blogDetails[post.slug];
  const text = detail.sections.flatMap((section) => section.paragraphs).join(' ');
  const words = wordsOf(text);
  if (words.length < 900) throw new Error(`${post.slug} has only ${words.length} substantive words`);
  return {
    family: 'blog', topic: detail.sections[0].title, slug: post.slug,
    sources: detail.sources.map((source) => source.url),
    contentHash: crypto.createHash('sha256').update(JSON.stringify({ post, detail })).digest('hex'),
    publicationDate: post.published, commitSha,
    deploymentEvidence: 'Pending combined production deployment by Browser Operator',
    liveUrl: `https://outsourcedprogrammers.com/blog/${post.slug}`,
    verificationTime: null, verified: false, wordCount: words.length, shingles: shingles(words),
  };
});
let maximumPairwiseFiveWordShingleJaccard = { value: 0, first: null, second: null };
for (let left = 0; left < entries.length; left += 1) for (let right = left + 1; right < entries.length; right += 1) {
  const a = entries[left].shingles; const b = entries[right].shingles; let intersection = 0;
  for (const shingle of a) if (b.has(shingle)) intersection += 1;
  const value = intersection / (a.size + b.size - intersection);
  if (value > maximumPairwiseFiveWordShingleJaccard.value) maximumPairwiseFiveWordShingleJaccard = { value, first: entries[left].slug, second: entries[right].slug };
}
if (maximumPairwiseFiveWordShingleJaccard.value >= 0.5) throw new Error(`Maximum shingle overlap is ${maximumPairwiseFiveWordShingleJaccard.value}`);
for (const entry of entries) delete entry.shingles;

const manifest = {
  schemaVersion: 1, family: 'blog', cycleLabel: 'October 2, 2026', domain: 'outsourcedprogrammers.com',
  repository: 'coolifystealthagents/outsourcedprogrammers', productionBranch: 'main', timezone: 'UTC',
  publicationDate: '2026-10-02', requiredCount: 12, contentCommit: commitSha, integrationCommit: null, remoteCommit: null,
  pairedResearchTask: 'OUTAAAAAAAAAAAA-79', deploymentResource: 'vbagj11m3mrgp0cuk6v07h28', deploymentOwner: 'browser operator',
  deploymentId: null, deploymentStatus: 'not submitted; waiting for sole combined production push', verifiedCount: 0,
  maximumPairwiseFiveWordShingleJaccard, entries,
};
const manifestTarget = '.paperclip/daily-content/2026-10-02/blog.json';
fs.mkdirSync(path.dirname(manifestTarget), { recursive: true });
fs.writeFileSync(manifestTarget, `${JSON.stringify(manifest, null, 2)}\n`);
fs.writeFileSync('ops/blog-publishing-ledger.json', `${JSON.stringify({ schemaVersion: 1, updatedAt: new Date().toISOString(), entries }, null, 2)}\n`);
console.log(`wrote October 2 Blog manifest and ledger with ${entries.length} entries; max overlap ${maximumPairwiseFiveWordShingleJaccard.value}`);
