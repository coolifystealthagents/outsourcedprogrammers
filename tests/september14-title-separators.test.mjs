import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(new URL('../app/september14-blog-batch.ts', import.meta.url), 'utf8');

const titleStems = [
  'Test what happens when a background job outlives its lease',
  'Rehearse a SAML metadata rotation before the old certificate expires',
  'Push a WebSocket client past its comfortable message rate',
];

test('September 14 review titles use colons instead of em dashes', () => {
  for (const title of titleStems) {
    assert.match(source, new RegExp(`${title}: September 14 review`));
    assert.doesNotMatch(source, new RegExp(`${title} — September 14 review`));
  }
});
