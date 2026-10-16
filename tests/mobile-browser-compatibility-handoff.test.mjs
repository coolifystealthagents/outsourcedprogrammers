import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/fleet-content.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const start = source.indexOf("slug === 'remote-programmer-browser-compatibility-matrix'");
const end = source.indexOf('} : {}),', start);
const record = source.slice(start, end);

test('browser-compatibility research keeps a bounded mobile development next step', () => {
  assert.notEqual(start, -1, 'browser-compatibility handoff declaration exists');
  assert.match(record, /dateModified:'2026-10-16'/);
  assert.match(record, /href:'\/services\/mobile-app-development'/);
  assert.match(record, /label:'Review mobile app development support'/);
  assert.match(record, /browser and device checks/);
  assert.match(record, /technical owner decides supported devices, acceptance, release, and any customer-impacting change/);
  assert.doesNotMatch(record, /production access, execution, and recovery/);
});

test('research renderer keeps mobile handoffs data-owned', () => {
  assert.match(renderer, /post\.nextStep&&<section className="related-panel">/);
  assert.match(renderer, /href=\{post\.nextStep\.href\}/);
  assert.doesNotMatch(renderer, /remote-programmer-browser-compatibility-matrix/);
});
