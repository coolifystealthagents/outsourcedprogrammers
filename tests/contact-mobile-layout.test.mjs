import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const css = fs.readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8');

test('mobile contact grids allow content to shrink within the viewport', () => {
  assert.match(
    css,
    /@media\(max-width:900px\)\{[^}]*\.contact-hero-grid[^}]*grid-template-columns:minmax\(0,1fr\)/,
    'The mobile contact hero grid must use a zero-minimum track so intrinsic content cannot widen and clip the layout.',
  );
  assert.match(
    css,
    /\.contact-hero-grid>\*[^{}]*\{min-width:0\}/,
    'The contact hero grid children must be shrinkable within the viewport.',
  );
});
