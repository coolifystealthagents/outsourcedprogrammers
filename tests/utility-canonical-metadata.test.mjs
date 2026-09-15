import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';

const canonicalPages = {
  '/cancellation-policy': '../app/cancellation-policy/page.tsx',
  '/privacy': '../app/privacy/page.tsx',
  '/terms': '../app/terms/page.tsx',
  '/thank-you': '../app/thank-you/page.tsx',
};

test('utility and legal documents declare self-referencing canonical metadata', () => {
  for (const [path, relativeFile] of Object.entries(canonicalPages)) {
    const source = readFileSync(new URL(relativeFile, import.meta.url), 'utf8');
    assert.match(
      source,
      new RegExp(`alternates\\s*:\\s*\\{\\s*canonical\\s*:\\s*['\"]https:\\/\\/outsourcedprogrammers\\.com${path.replaceAll('/', '\\/')}['\"]\\s*\\}`),
      `${path} must declare its exact absolute canonical URL`,
    );
  }
});

test('the legacy cancellation route permanently redirects to the indexed policy URL', () => {
  const source = readFileSync(new URL('../app/cancellation/page.tsx', import.meta.url), 'utf8');
  assert.match(source, /import\s*\{\s*permanentRedirect\s*\}\s*from\s*['\"]next\/navigation['\"]/);
  assert.match(source, /permanentRedirect\(\s*['\"]\/cancellation-policy['\"]\s*\)/);
  assert.doesNotMatch(source, /alternates\s*:/);
});
