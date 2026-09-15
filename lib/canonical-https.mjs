const PRODUCTION_HOSTS = new Set([
  'outsourcedprogrammers.com',
  'www.outsourcedprogrammers.com',
]);

function headerValue(headers, name) {
  if (!headers) return null;
  if (typeof headers.get === 'function') return headers.get(name);

  const key = Object.keys(headers).find(
    (candidate) => candidate.toLowerCase() === name.toLowerCase(),
  );
  return key ? headers[key] : null;
}

function cloudflareVisitorScheme(headers) {
  const value = headerValue(headers, 'cf-visitor');
  if (!value) return null;

  try {
    const parsed = JSON.parse(String(value));
    return parsed && typeof parsed === 'object' && typeof parsed.scheme === 'string'
      ? parsed.scheme.toLowerCase()
      : null;
  } catch {
    return null;
  }
}

function normalizedHostname(value) {
  if (!value) return null;

  const candidate = String(value).split(',', 1)[0].trim();
  try {
    return new URL(`http://${candidate}`).hostname.toLowerCase();
  } catch {
    return null;
  }
}

function productionHostname(url, headers) {
  const candidates = [
    normalizedHostname(headerValue(headers, 'x-forwarded-host')),
    normalizedHostname(headerValue(headers, 'host')),
    url.hostname.toLowerCase(),
  ];
  return candidates.find((hostname) => PRODUCTION_HOSTS.has(hostname)) || null;
}

export function canonicalHttpsRedirect(inputUrl, headers) {
  const url = new URL(inputUrl.toString());
  const hostname = productionHostname(url, headers);
  if (!hostname) return null;

  const forwardedScheme = String(headerValue(headers, 'x-forwarded-proto') || '')
    .split(',', 1)[0]
    .trim()
    .toLowerCase();
  const visitorScheme = cloudflareVisitorScheme(headers);
  const needsHttps =
    url.protocol.toLowerCase() === 'http:' ||
    forwardedScheme === 'http' ||
    visitorScheme === 'http';

  if (!needsHttps) return null;

  url.protocol = 'https:';
  url.hostname = hostname;
  url.port = '';
  return url.toString();
}
