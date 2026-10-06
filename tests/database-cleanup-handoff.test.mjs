import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/fleet-content.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const start = source.indexOf('slug:"research-database-cleanup-outsourcing"');
const end = source.indexOf('},\n  {slug:', start);
const record = source.slice(start, end);

test('database cleanup research keeps a bounded Database Engineering next step', () => {
  assert.notEqual(start, -1, 'database cleanup research record exists');
  assert.match(record, /dateModified:"2026-10-06"/);
  assert.match(record, /heading:"Plan a reviewable database cleanup lane"/);
  assert.match(record, /href:"\/services\/database-engineering"/);
  assert.match(record, /label:"Review database engineering support"/);
  assert.match(record, /dry run, and an owner-approved window/);
  assert.match(record, /data owner keeps approval for production access, execution, and recovery/);
});

test('research renderer renders optional next-step data without a database slug branch', () => {
  assert.match(renderer, /post\.nextStep&&<section className="related-panel">/);
  assert.match(renderer, /<a href=\{post\.nextStep\.href\}>\{post\.nextStep\.label\}<\/a>/);
  assert.doesNotMatch(renderer, /research-database-cleanup-outsourcing/);
});
