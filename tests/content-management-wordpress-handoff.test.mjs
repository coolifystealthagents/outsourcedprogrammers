import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';

const content = readFileSync(new URL('../app/fleet-content.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');

test('content-management QA keeps its bounded WordPress engineering handoff', () => {
  const start = content.indexOf("slug === 'outsourced-content-management-qa'");
  const end = content.indexOf('} : {}),', start);
  assert.notEqual(start, -1, 'content-management QA handoff must exist');
  assert.ok(end > start, 'the generated-record boundary must follow the handoff');
  const source = content.slice(start, end);
  assert.match(source, /dateModified:'2026-10-02'/);
  assert.match(source, /heading:'Set up a safe WordPress change lane'/);
  assert.match(source, /href:'\/services\/wordpress-engineering'/);
  assert.match(source, /label:'Review WordPress engineering support'/);
  assert.match(source, /one reviewed theme or plugin fix in staging/);
  assert.match(source, /technical owner approves plugins, publishing, access, and production changes/);
  assert.doesNotMatch(source, /owner approves production releases/);
});

test('research renderer renders the data-owned WordPress next step', () => {
  assert.match(renderer, /post\.nextStep&&<section className="related-panel">/);
  assert.match(renderer, /href=\{post\.nextStep\.href\}/);
});