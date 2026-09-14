import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';

const content = readFileSync(new URL('../app/fleet-content.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');
const start = content.indexOf('slug:"research-react-developer-onboarding"');
const end = content.indexOf('slug:"research-node-api-maintenance"', start);

function record() {
  assert.notEqual(start, -1, 'React onboarding research record must exist');
  assert.ok(end > start, 'React onboarding record boundary must follow the target');
  return content.slice(start, end);
}

test('React onboarding research keeps its bounded Philippines service handoff', () => {
  const source = record();
  assert.match(source, /dateModified:"2026-09-14"/);
  assert.match(source, /heading:"Set up a React work lane before the queue grows"/);
  assert.match(source, /href:"\/services\/react-application-development"/);
  assert.match(source, /label:"Review React application development support"/);
  assert.match(source, /small, reviewable React task/);
  assert.match(source, /technical owner keeps approval for architecture, merges, access, and production releases/);
  assert.doesNotMatch(source, /architecture, merges, secrets, and production releases/);
});

test('research renderer continues to render optional data-owned next steps', () => {
  assert.match(renderer, /post\.nextStep&&<section className="related-panel">/);
  assert.match(renderer, /href=\{post\.nextStep\.href\}/);
});
