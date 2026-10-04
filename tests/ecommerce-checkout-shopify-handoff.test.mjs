import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';

const content = readFileSync(new URL('../app/fleet-content.ts', import.meta.url), 'utf8');
const renderer = readFileSync(new URL('../app/research/[slug]/page.tsx', import.meta.url), 'utf8');

test('checkout QA keeps its bounded Shopify development handoff', () => {
  const start = content.indexOf("slug === 'outsourced-ecommerce-checkout-qa'");
  const end = content.indexOf('} : {}),', start);
  assert.notEqual(start, -1, 'checkout QA handoff must exist');
  assert.ok(end > start, 'the generated-record boundary must follow the handoff');
  const source = content.slice(start, end);
  assert.match(source, /dateModified:'2026-10-04'/);
  assert.match(source, /heading:'Plan a Shopify checkout test lane'/);
  assert.match(source, /href:'\/services\/shopify-development'/);
  assert.match(source, /label:'Review Shopify development support'/);
  assert.match(source, /defined checkout change in a development store/);
  assert.match(source, /store owner approves checkout, payment settings, app scopes, and publication/);
  assert.doesNotMatch(source, /specialist approves checkout/);
});

test('research renderer keeps the Shopify handoff data-owned', () => {
  assert.match(renderer, /post\.nextStep&&<section className="related-panel">/);
  assert.match(renderer, /href=\{post\.nextStep\.href\}/);
});