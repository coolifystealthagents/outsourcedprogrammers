#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import ts from 'typescript';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, '..');
const sourcePath = process.env.AUG11_RESEARCH_SOURCE
  ? resolve(process.env.AUG11_RESEARCH_SOURCE)
  : resolve(repoRoot, 'app/fleet-content.ts');
const source = readFileSync(sourcePath, 'utf8');
const expected = [
  'outsourced-programmer-mean-time-to-review-study',
  'remote-developer-pull-request-size-analysis',
  'outsourced-software-defect-escape-rate-study',
  'distributed-engineering-handoff-latency-research',
  'outsourced-programmer-access-review-frequency-study',
  'remote-development-test-flake-rate-analysis',
  'outsourced-code-review-rework-rate-study',
  'distributed-developer-onboarding-time-analysis',
  'outsourced-release-rollback-readiness-study',
  'remote-programmer-documentation-coverage-research',
];

const transpiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ES2022,
    target: ts.ScriptTarget.ES2022,
  },
  fileName: sourcePath,
  reportDiagnostics: true,
});
const errors = (transpiled.diagnostics || []).filter((diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error);
if (errors.length) {
  throw new Error(`TypeScript transpilation failed: ${errors.map((item) => item.messageText).join('; ')}`);
}
const moduleUrl = `data:text/javascript;base64,${Buffer.from(transpiled.outputText).toString('base64')}`;
const { researchPosts } = await import(moduleUrl);
if (!Array.isArray(researchPosts)) throw new Error('researchPosts export is unavailable');

const allSlugs = researchPosts.map((post) => String(post?.slug ?? ''));
const invalidSlugs = [...new Set(allSlugs.filter((slug) => !/^[a-z0-9][a-z0-9-]{2,}$/.test(slug)))];
if (invalidSlugs.length) throw new Error(`invalid rendered Research route segments: ${invalidSlugs.map(JSON.stringify).join(', ')}`);
const duplicates = [...new Set(allSlugs.filter((slug, index) => allSlugs.indexOf(slug) !== index))];
if (duplicates.length) throw new Error(`duplicate rendered Research routes: ${duplicates.join(', ')}`);

const august11 = researchPosts.filter((post) => post?.published === '2026-08-11');
const august11Slugs = august11.map((post) => String(post?.slug || ''));
const missing = expected.filter((slug) => !august11Slugs.includes(slug));
const extra = august11Slugs.filter((slug) => !expected.includes(slug));
if (august11.length !== expected.length || missing.length || extra.length) {
  throw new Error(`August 11 Research set mismatch: count=${august11.length}; missing=${missing.join(',') || 'none'}; extra=${extra.join(',') || 'none'}`);
}

for (const slug of expected) {
  const post = august11.find((candidate) => candidate.slug === slug);
  if (!post) throw new Error(`missing exported Research route: ${slug}`);
  if (!Array.isArray(post.sources) || post.sources.length === 0) throw new Error(`missing evidence sources: ${slug}`);
  for (const sourcePair of post.sources) {
    if (!Array.isArray(sourcePair) || sourcePair.length !== 2) throw new Error(`invalid source pair: ${slug}`);
    const [label, url] = sourcePair;
    if (typeof label !== 'string' || !label.trim()) throw new Error(`empty source label: ${slug}`);
    if (typeof url !== 'string') throw new Error(`invalid HTTPS source URL: ${slug}`);
    let parsed;
    try {
      parsed = new URL(url);
    } catch {
      throw new Error(`invalid HTTPS source URL: ${slug}`);
    }
    if (parsed.protocol !== 'https:' || !parsed.hostname || parsed.username || parsed.password) {
      throw new Error(`invalid HTTPS source URL: ${slug}`);
    }
  }
}

console.log(JSON.stringify({
  expected: expected.length,
  exportedAugust11: august11.length,
  globallyUniqueResearchRoutes: allSlugs.length,
  evidenceSourcePairs: august11.reduce((sum, post) => sum + post.sources.length, 0),
}));
