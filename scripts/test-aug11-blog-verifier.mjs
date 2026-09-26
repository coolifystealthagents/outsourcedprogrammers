#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, '..');
const verifier = resolve(scriptDir, 'verify-aug11-blog-batch.mjs');
const original = readFileSync(resolve(repoRoot, 'app/data.ts'), 'utf8');
const temp = mkdtempSync(resolve(tmpdir(), 'aug11-blog-verifier-'));

function expectFailure(name, mutate) {
  const path = resolve(temp, `${name}.ts`);
  const candidate = mutate(original);
  if (candidate === original) throw new Error(`mutation did not alter source: ${name}`);
  writeFileSync(path, candidate);
  try {
    execFileSync(process.execPath, [verifier], {
      cwd: '/',
      env: { ...process.env, AUG11_BLOG_SOURCE: path },
      stdio: 'pipe',
    });
  } catch (error) {
    if (error.status !== 0) return;
    throw error;
  }
  throw new Error(`verifier accepted invalid mutation: ${name}`);
}

try {
  execFileSync(process.execPath, [verifier], { cwd: '/', stdio: 'inherit' });
  expectFailure('missing-replacement-route', (text) => text.replace(
    'slug: "outsource-translation-key-audit"',
    'slug: "outsource-localization-qa"',
  ));
  expectFailure('wrong-replacement-publication', (text) => text.replace(
    'slug: "outsource-translation-key-audit", title: "Outsource a translation key audit with release-safe evidence", excerpt: "Find missing, unused, and fallback translation keys across product flows without changing approved source copy.", minutes: 8, published: "2026-08-12"',
    'slug: "outsource-translation-key-audit", title: "Outsource a translation key audit with release-safe evidence", excerpt: "Find missing, unused, and fallback translation keys across product flows without changing approved source copy.", minutes: 8, published: "2026-08-11"',
  ));
  expectFailure('duplicate-rendered-route', (text) => text.replace(
    'slug: "outsource-translation-key-audit"',
    'slug: "outsource-dashboard-qa"',
  ));
  console.log(JSON.stringify({ negativeMutationsRejected: 3 }));
} finally {
  rmSync(temp, { recursive: true, force: true });
}
