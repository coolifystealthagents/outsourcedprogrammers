#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const parent = process.env.AUG11_PARENT || 'ecfebf3c2ada48947f477032357042d389ddbf02';
const sourcePath = 'app/data.ts';
const current = readFileSync(sourcePath, 'utf8');
const prior = execFileSync('git', ['show', `${parent}:${sourcePath}`], { encoding: 'utf8' });
const recordPattern = /\{\s*slug:\s*"([a-z0-9][a-z0-9-]{2,})"[^{}]*?published:\s*"2026-08-11"[^{}]*?\}/g;
const slugPattern = /\{\s*slug:\s*"([a-z0-9][a-z0-9-]{2,})"/g;
const currentAug11 = [...current.matchAll(recordPattern)].map((match) => match[1]);
const priorSlugs = new Set([...prior.matchAll(slugPattern)].map((match) => match[1]));
const currentAll = [...current.matchAll(slugPattern)].map((match) => match[1]);
const duplicateSlugs = [...new Set(currentAll.filter((slug, index) => currentAll.indexOf(slug) !== index))].sort();
const introduced = currentAug11.filter((slug) => !priorSlugs.has(slug));
const uniqueIntroduced = [...new Set(introduced)];

if (currentAug11.length !== 22) {
  throw new Error(`expected 22 August 11 records, found ${currentAug11.length}`);
}
if (uniqueIntroduced.length !== 22) {
  throw new Error(`expected 22 genuinely new August 11 routes, found ${uniqueIntroduced.length}; duplicates=${duplicateSlugs.join(',') || 'none'}`);
}
if (duplicateSlugs.length) {
  throw new Error(`duplicate Blog slugs remain: ${duplicateSlugs.join(',')}`);
}
console.log(JSON.stringify({ august11Records: currentAug11.length, genuinelyNewRoutes: uniqueIntroduced.length, duplicateSlugs }));
