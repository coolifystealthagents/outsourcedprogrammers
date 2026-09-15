import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';

const layout = fs.readFileSync(new URL('../app/layout.tsx', import.meta.url), 'utf8');

test('root metadata advertises an existing site icon', () => {
  assert.match(layout, /icons\s*:\s*\{[^}]*icon\s*:\s*['"]\/logo\.svg['"][^}]*shortcut\s*:\s*['"]\/logo\.svg['"]/);
  assert.ok(fs.existsSync(new URL('../public/logo.svg', import.meta.url)));
});
