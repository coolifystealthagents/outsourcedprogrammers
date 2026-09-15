import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const helperUrl = new URL('../lib/canonical-https.mjs', import.meta.url);
const middlewareUrl = new URL('../middleware.js', import.meta.url);

assert.ok(existsSync(helperUrl), 'canonical HTTPS behavior helper must exist');
const { canonicalHttpsRedirect } = await import(helperUrl.href);

const headers = (values = {}) => ({
  get(name) {
    const entry = Object.entries(values).find(([key]) => key.toLowerCase() === name.toLowerCase());
    return entry?.[1] ?? null;
  },
});

test('redirects an HTTP production URL to HTTPS while preserving path and query', () => {
  assert.equal(
    canonicalHttpsRedirect(
      'http://outsourcedprogrammers.com:8080/contact-us?source=qa',
      headers(),
    ),
    'https://outsourcedprogrammers.com/contact-us?source=qa',
  );
});

test('redirects when the forwarded protocol identifies an HTTP visitor', () => {
  assert.equal(
    canonicalHttpsRedirect(
      'https://www.outsourcedprogrammers.com/pricing?plan=team',
      headers({ 'x-forwarded-proto': 'http, https' }),
    ),
    'https://www.outsourcedprogrammers.com/pricing?plan=team',
  );
});

test('redirects when Cloudflare visitor metadata identifies HTTP', () => {
  assert.equal(
    canonicalHttpsRedirect(
      'https://outsourcedprogrammers.com/services',
      headers({ 'cf-visitor': '{"scheme":"http"}' }),
    ),
    'https://outsourcedprogrammers.com/services',
  );
});

test('an HTTP signal wins when trusted protocol signals conflict', () => {
  assert.equal(
    canonicalHttpsRedirect(
      'https://outsourcedprogrammers.com/blog',
      headers({ 'x-forwarded-proto': 'https', 'cf-visitor': '{"scheme":"http"}' }),
    ),
    'https://outsourcedprogrammers.com/blog',
  );
});

test('passes through canonical HTTPS and malformed Cloudflare metadata', () => {
  assert.equal(
    canonicalHttpsRedirect(
      'https://outsourcedprogrammers.com/contact-us',
      headers({ 'x-forwarded-proto': 'https', 'cf-visitor': 'not-json' }),
    ),
    null,
  );
});

test('redirects a proxy-normalized URL using an exact public Host header', () => {
  assert.equal(
    canonicalHttpsRedirect(
      'http://127.0.0.1:3000/contact-us?source=proxy',
      headers({ host: 'outsourcedprogrammers.com', 'x-forwarded-proto': 'http' }),
    ),
    'https://outsourcedprogrammers.com/contact-us?source=proxy',
  );
});

test('redirects a proxy-normalized URL using an exact forwarded host', () => {
  assert.equal(
    canonicalHttpsRedirect(
      'http://127.0.0.1:3000/pricing',
      headers({ host: 'internal:3000', 'x-forwarded-host': 'www.outsourcedprogrammers.com', 'x-forwarded-proto': 'http' }),
    ),
    'https://www.outsourcedprogrammers.com/pricing',
  );
});

test('does not redirect unrelated hosts', () => {
  assert.equal(
    canonicalHttpsRedirect(
      'http://localhost:3000/contact-us',
      headers({ host: 'attacker.example', 'x-forwarded-host': 'attacker.example', 'x-forwarded-proto': 'http', 'cf-visitor': '{"scheme":"http"}' }),
    ),
    null,
  );
});

test('middleware wires the behavior helper to a permanent 308 redirect', () => {
  assert.ok(existsSync(middlewareUrl), 'Next.js middleware must exist');
  const source = readFileSync(middlewareUrl, 'utf8');
  assert.match(source, /canonicalHttpsRedirect\(request\.nextUrl,\s*request\.headers\)/);
  assert.match(source, /NextResponse\.redirect\(destination,\s*308\)/);
});
