import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app/fleet-content.ts', import.meta.url), 'utf8');
const startMarker = 'export const fleetServices = ';
const start = source.indexOf(startMarker);
const end = source.indexOf('] as const;', start);
assert.notEqual(start, -1, 'fleetServices registry must exist');
assert.ok(end > start, 'fleetServices registry must have a bounded data literal');
const services = JSON.parse(source.slice(start + startMarker.length, end + 1));

const expectedSpecificTerms = {
  'react-application-development': /React|component|hook|state|focus/i,
  'nodejs-api-development': /Node|API|endpoint|schema|webhook|authorization/i,
  'wordpress-engineering': /WordPress|PHP|plugin|theme|nonce/i,
  'shopify-development': /Shopify|Liquid|metafield|cart|theme/i,
  'qa-automation': /Playwright|Cypress|fixture|browser|CI/i,
  'devops-support': /pipeline|infrastructure|runbook|deployment|cloud/i,
  'database-engineering': /migration|query|index|backfill|transaction/i,
  'mobile-app-development': /iOS|Android|signing|device|deep-link/i,
  'legacy-application-maintenance': /characterization|deprecated|compatibility|legacy|baseline/i,
};
const forbiddenTemplate = /queue preparation|source-record checks|exception logging|daily handoff notes and follow-up|share current examples and source records|document the finish line and escalation rule|review the first work batch together/i;

test('all ten service routes remain data-owned', () => {
  assert.equal(services.length, 10);
  assert.deepEqual(
    services.map(({ slug }) => slug),
    ['nextjs-development', ...Object.keys(expectedSpecificTerms)],
  );
});

test('every non-Next service provides concrete and reviewable work boundaries', () => {
  for (const [slug, specificTerms] of Object.entries(expectedSpecificTerms)) {
    const service = services.find((entry) => entry.slug === slug);
    assert.ok(service, `${slug} must exist`);
    assert.match(service.summary, /Philippines-based/i, `${slug} must bind the staffing location`);
    assert.match(service.summary, /owner/i, `${slug} must preserve owner authority`);
    assert.doesNotMatch(JSON.stringify(service), forbiddenTemplate, `${slug} must not use the generic template`);

    for (const field of ['tasks', 'controls', 'launch']) {
      assert.equal(service[field].length, 4, `${slug}.${field} must have four practical items`);
      assert.equal(new Set(service[field]).size, 4, `${slug}.${field} must not repeat items`);
      assert.ok(service[field].every((item) => item.length >= 45), `${slug}.${field} items must be operationally specific`);
    }

    assert.match(JSON.stringify(service), specificTerms, `${slug} must use domain-specific language`);
  }
});

test('service summaries and operating lists are differentiated across the catalog', () => {
  for (const field of ['summary', 'tasks', 'controls', 'launch']) {
    const values = services.map((service) => JSON.stringify(service[field]));
    assert.equal(new Set(values).size, services.length, `${field} must be unique for every service`);
  }
});
