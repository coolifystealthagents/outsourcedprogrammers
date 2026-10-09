import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const root = path.resolve(import.meta.dirname, '..');
const source = fs.readFileSync(path.join(root, 'app/fleet-content.ts'), 'utf8');
const renderer = fs.readFileSync(path.join(root, 'app/research/[slug]/page.tsx'), 'utf8');
const record = source.match(/\{slug:"research-legacy-code-maintenance"[\s\S]*?\},\n  \{slug:"research-access-controls-programmers"/);

test('legacy maintenance research keeps a bounded Philippines service handoff', () => {
  assert.ok(record, 'legacy maintenance record must exist');
  const value = record[0];
  assert.match(value, /dateModified:"2026-10-09"/);
  assert.match(value, /href:"\/services\/legacy-application-maintenance"/);
  assert.match(value, /label:"Review legacy application maintenance support"/);
  assert.match(value, /baseline, test, and rollback note/);
  assert.match(value, /technical owner keeps scope, dependency, data-conversion, and release approval/);
  assert.doesNotMatch(value, /production access, execution, and recovery/);
});

test('research renderer keeps legacy maintenance handoffs data-owned', () => {
  assert.match(renderer, /post\.nextStep&&<section className="related-panel">/);
  assert.match(renderer, /href=\{post\.nextStep\.href\}/);
});
