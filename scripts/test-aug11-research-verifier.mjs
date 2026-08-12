#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, '..');
const verifier = resolve(scriptDir, 'verify-aug11-research-batch.mjs');
const original = readFileSync(resolve(repoRoot, 'app/fleet-content.ts'), 'utf8');
const temp = mkdtempSync(resolve(tmpdir(), 'aug11-research-verifier-'));

function expectFailure(name, mutate) {
  const path = resolve(temp, `${name}.ts`);
  const candidate = mutate(original);
  if (candidate === original) throw new Error(`mutation did not alter source: ${name}`);
  writeFileSync(path, candidate);
  try {
    execFileSync(process.execPath, [verifier], {
      cwd: '/',
      env: { ...process.env, AUG11_RESEARCH_SOURCE: path },
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
  expectFailure('extra-aug11-route', (text) => text.replace(
    "const august11ResearchPosts: ReadonlyArray<ResearchPost> = [",
    "const august11ResearchPosts: ReadonlyArray<ResearchPost> = [{slug:'unexpected-aug11-research',title:'Unexpected',excerpt:'Unexpected',published:'2026-08-11',body:['Evidence'],sources:[['NIST','https://csrc.nist.gov/']]},",
  ));
  expectFailure('empty-sources', (text) => text.replace(
    "sources:[['DORA research program','https://dora.dev/research/'],['GitHub pull request review documentation','https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews']]",
    'sources:[]',
  ));
  expectFailure('generated-duplicate', (text) => text.replace(
    "['outsourced-requirements-change-log','A change log for outsourced software requirements','Requirements changes']",
    "['outsourced-programmer-mean-time-to-review-study','A generated duplicate','Requirements changes']",
  ));
  expectFailure('disconnected-export', (text) => text.replace(
    '[...august11ResearchPosts, ...priorResearchPosts',
    '[...priorResearchPosts',
  ));
  expectFailure('wrong-date', (text) => text.replace(
    "slug:'outsourced-programmer-mean-time-to-review-study', title:'Mean time to review in outsourced programming teams', excerpt:'A measurement study for separating review delay from implementation time in distributed software delivery.', topic:'Review latency', published:'2026-08-11'",
    "slug:'outsourced-programmer-mean-time-to-review-study', title:'Mean time to review in outsourced programming teams', excerpt:'A measurement study for separating review delay from implementation time in distributed software delivery.', topic:'Review latency', published:'2026-08-10'",
  ));
  expectFailure('invalid-source-url', (text) => text.replace(
    "'https://dora.dev/research/'",
    "'https://?'",
  ));
  expectFailure('empty-generated-slug', (text) => text.replace(
    "['outsourced-requirements-change-log','A change log for outsourced software requirements','Requirements changes']",
    "['','An invalid generated route','Requirements changes']",
  ));
  console.log(JSON.stringify({ negativeMutationsRejected: 7 }));
} finally {
  rmSync(temp, { recursive: true, force: true });
}
