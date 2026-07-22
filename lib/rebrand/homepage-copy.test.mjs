import assert from 'node:assert/strict';
import test from 'node:test';

import { homepageCopy } from './homepage-copy.ts';

function collectStrings(value) {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(collectStrings);
  return [];
}

const publicCopy = collectStrings(homepageCopy).join('\n');

test('behoudt de vier aktes in de contractuele volgorde', () => {
  assert.deepEqual(
    homepageCopy.navigation.acts.map((act) => act.label),
    ['Chaos', 'Bezinning', 'Arbeid', 'Resultaat'],
  );
});

test('behoudt de founder-led qualifier', () => {
  assert.match(homepageCopy.hero.founderTrustLine, /rechtstreeks met Subor Cheung/i);
  assert.match(homepageCopy.hero.founderTrustLine, /transparant toegevoegd/i);
});

test('publiceert geen interne redactiestatussen', () => {
  assert.doesNotMatch(
    publicCopy,
    /\[(?:BEWIJS NODIG|GOEDKEURING NODIG|BESLISSING NODIG|CASE PLACEHOLDER|NOG BEPALEN)/i,
  );
});

test('vermijdt onbewezen cijfers, prijzen en verboden marketingtaal', () => {
  assert.doesNotMatch(publicCopy, /\d+\s*%|€\s*\d/i);
  assert.doesNotMatch(
    publicCopy,
    /AI transformeert|future-proof|seamless|cutting-edge|innovatieve totaaloplossingen|wij ontzorgen volledig|Snel waar het kan/i,
  );
});

test('houdt de prototype-intake eerlijk en vrij van sensitive-dataformuliercopy', () => {
  assert.match(homepageCopy.scan.prototypeMicrocopy, /geen formulierdata verzameld of verzonden/i);
  assert.doesNotMatch(publicCopy, /success state|wachtwoorden|API-sleutels|broncode|gezondheidsgegevens/i);
  assert.match(homepageCopy.scan.fallbackCta.href, /^mailto:/);
});

test('labelt de prooflaag als rapportstructuur en niet als klantcase', () => {
  assert.match(homepageCopy.result.proof.kicker, /geen klantcase/i);
  assert.match(homepageCopy.result.proof.intro, /geen testimonial, statistiek of gepubliceerd klantresultaat/i);
});
