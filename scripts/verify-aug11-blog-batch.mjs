#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import ts from 'typescript';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, '..');
const parent = process.env.AUG11_PARENT || 'ecfebf3c2ada48947f477032357042d389ddbf02';
const sourcePath = process.env.AUG11_BLOG_SOURCE
  ? resolve(process.env.AUG11_BLOG_SOURCE)
  : resolve(repoRoot, 'app/data.ts');
const expectedPublication = '2026-08-12';
const expected = [
  'outsource-mobile-app-release-checks',
  'outsource-sql-query-review',
  'outsource-figma-component-qa',
  'outsource-redis-cache-testing',
  'outsource-web-performance-budget',
  'outsource-customer-import-qa',
  'outsource-oauth-integration-testing',
  'outsource-frontend-error-monitoring',
  'outsource-api-pagination-testing',
  'outsource-email-template-qa',
  'outsource-privacy-settings-qa',
  'outsource-cron-job-maintenance',
  'outsource-typescript-type-cleanup',
  'outsource-accessibility-regression-testing',
  'outsource-file-upload-testing',
  'outsource-feature-flag-rollout-qa',
  'outsource-analytics-event-audit',
  'outsource-react-native-upgrade',
  'outsource-logging-redaction-review',
  'outsource-dashboard-qa',
  'outsource-translation-key-audit',
  'outsource-release-rollback-drill',
];
const source = readFileSync(sourcePath, 'utf8');
const transpiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
  fileName: sourcePath,
  reportDiagnostics: true,
});
const errors = (transpiled.diagnostics || []).filter((diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error);
if (errors.length) throw new Error(`TypeScript transpilation failed: ${errors.map((item) => item.messageText).join('; ')}`);

const temp = mkdtempSync(resolve(repoRoot, '.tmp-aug11-blog-verifier-'));
try {
  const appRoot = resolve(repoRoot, 'app');
  const copied = new Set();
  function copyRuntimeModule(inputPath) {
    const normalized = resolve(inputPath);
    if (copied.has(normalized)) return;
    copied.add(normalized);
    const input = readFileSync(normalized, 'utf8');
    const imports = [...input.matchAll(/from\s+['"](\.\/[^'"]+)['"]/g)].map((match) => match[1]);
    for (const specifier of imports) copyRuntimeModule(resolve(dirname(normalized), `${specifier}.ts`));
    const result = ts.transpileModule(input, {
      compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2022 },
      fileName: normalized,
      reportDiagnostics: true,
    });
    const moduleErrors = (result.diagnostics || []).filter((diagnostic) => diagnostic.category === ts.DiagnosticCategory.Error);
    if (moduleErrors.length) throw new Error(`TypeScript transpilation failed: ${moduleErrors.map((item) => item.messageText).join('; ')}`);
    const outputPath = resolve(temp, relative(appRoot, normalized).replace(/\.ts$/, '.mjs'));
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, result.outputText.replace(/(from\s+['"]\.\/[^'"]+)(['"])/g, '$1.mjs$2'));
  }
  const runtimeImports = [...source.matchAll(/from\s+['"](\.\/[^'"]+)['"]/g)].map((match) => match[1]);
  for (const specifier of runtimeImports) copyRuntimeModule(resolve(appRoot, `${specifier.slice(2)}.ts`));
  const output = transpiled.outputText.replace(/(from\s+['"]\.\/[^'"]+)(['"])/g, '$1.mjs$2');
  const dataPath = resolve(temp, 'data.mjs');
  writeFileSync(dataPath, output);
  const { blogPosts } = await import(`${pathToFileURL(dataPath).href}?v=${Date.now()}`);
  if (!Array.isArray(blogPosts)) throw new Error('blogPosts export is unavailable');

  const allSlugs = blogPosts.map((post) => String(post?.slug ?? ''));
  const invalidHistoricalSlugs = allSlugs.filter((slug) => expected.includes(slug) && !/^[a-z0-9][a-z0-9-]{2,}$/.test(slug));
  if (invalidHistoricalSlugs.length) throw new Error(`invalid August 11 replacement route segments: ${invalidHistoricalSlugs.map(JSON.stringify).join(', ')}`);

  const historical = blogPosts.filter((post) => expected.includes(String(post?.slug)));
  const historicalSlugs = historical.map((post) => String(post.slug));
  const missing = expected.filter((slug) => !historicalSlugs.includes(slug));
  const extra = historicalSlugs.filter((slug) => !expected.includes(slug));
  const wrongPublication = historical.filter((post) => post.published !== expectedPublication).map((post) => String(post.slug));
  if (historical.length !== expected.length || missing.length || extra.length || wrongPublication.length) {
    throw new Error(`August 11 replacement batch mismatch: count=${historical.length}; missing=${missing.join(',') || 'none'}; extra=${extra.join(',') || 'none'}; wrongPublication=${wrongPublication.join(',') || 'none'}`);
  }

  const prior = execFileSync('git', ['show', `${parent}:app/data.ts`], { cwd: repoRoot, encoding: 'utf8' });
  const priorSlugs = new Set([...prior.matchAll(/\{\s*slug:\s*["']([a-z0-9][a-z0-9-]{2,})["']/g)].map((match) => match[1]));
  const introduced = expected.filter((slug) => !priorSlugs.has(slug));
  if (introduced.length !== expected.length) throw new Error(`August 11 replacement routes are not all new against the release parent: ${expected.filter((slug) => priorSlugs.has(slug)).join(', ')}`);

  console.log(JSON.stringify({
    expected: expected.length,
    exportedReplacementBatch: historical.length,
    genuinelyNewRoutes: introduced.length,
    exportedBlogRoutes: allSlugs.length,
  }));
} finally {
  rmSync(temp, { recursive: true, force: true });
}
