import test from 'node:test';
import assert from 'node:assert/strict';
import { buildInquiry } from '../public/app.js';

test('rental inquiry preserves the chosen lighting tower, dates, location and quantity', () => {
  const inquiry = buildInquiry({
    service: 'rental',
    model: 'atlas-copco-hilight',
    location: '  Wrocław,   Polska  ',
    quantity: '2',
    start: '2026-11-03',
    duration: '1–2 tygodnie',
  });
  assert.equal(inquiry.subject, 'Wynajem masztów oświetleniowych — Atlas Copco HiLight — Wrocław, Polska');
  assert.match(inquiry.body, /Model: Atlas Copco HiLight/);
  assert.match(inquiry.body, /Lokalizacja realizacji: Wrocław, Polska/);
  assert.match(inquiry.body, /Wstępna liczba masztów: 2/);
  assert.match(inquiry.body, /Planowany początek wynajmu: 03\.11\.2026/);
  assert.match(inquiry.body, /Planowany okres wynajmu: 1–2 tygodnie/);
});

test('sale inquiry includes site requirements but excludes stale rental dates', () => {
  const inquiry = buildInquiry({
    service: 'sale',
    model: 'generac-v20-pro',
    location: 'Opole',
    quantity: 1,
    start: '2026-11-03',
    duration: 'Kilka dni',
    area: 'Plac 40 × 60 m',
    operatingHours: '18:00–06:00',
    powerSupply: 'Brak zasilania sieciowego na miejscu',
  });
  assert.equal(inquiry.subject, 'Zakup masztów oświetleniowych — Generac V20 PRO — Opole');
  assert.match(inquiry.body, /ofertę zakupu masztów oświetleniowych/);
  assert.match(inquiry.body, /Powierzchnia \/ wymiary terenu: Plac 40 × 60 m/);
  assert.match(inquiry.body, /Planowane godziny pracy: 18:00–06:00/);
  assert.match(inquiry.body, /Dostępne zasilanie: Brak zasilania sieciowego na miejscu/);
  assert.doesNotMatch(inquiry.body, /Planowany początek wynajmu|Planowany okres wynajmu|03\.11\.2026|Kilka dni/);
});

test('user details and multiline notes survive without introducing subject line breaks', () => {
  const inquiry = buildInquiry({
    location: 'Łódź\r\nplac A',
    model: 'Urządzenie\r\nz zapytania',
    quantity: 3,
    application: 'Impreza plenerowa',
    area: '  20 × 30 m\nplus parking  ',
    operatingHours: '  Od 18:00\r\ndo 06:00  ',
    powerSupply: ' Do\nustalenia ',
    message: 'Wydarzenie na 300 osób.\r\nPraca: 10:00–18:00.\rProszę o kontakt.',
  });
  assert.match(inquiry.subject, /Łódź plac A$/);
  assert.doesNotMatch(inquiry.subject, /[\r\n]/);
  assert.match(inquiry.body, /Zastosowanie: Impreza plenerowa/);
  assert.match(inquiry.body, /Powierzchnia \/ wymiary terenu: 20 × 30 m plus parking/);
  assert.match(inquiry.subject, /Urządzenie z zapytania/);
  assert.match(inquiry.body, /Planowane godziny pracy: Od 18:00 do 06:00/);
  assert.match(inquiry.body, /Dostępne zasilanie: Do ustalenia/);
  assert.ok(inquiry.body.includes('Wydarzenie na 300 osób.\nPraca: 10:00–18:00.\nProszę o kontakt.'));
  assert.doesNotMatch(inquiry.body, /\r/);
});

test('unspecified equipment requests selection instead of assuming a model', () => {
  const inquiry = buildInquiry({ location: 'Poznań' });
  assert.equal(inquiry.subject, 'Wynajem masztów oświetleniowych — Poznań');
  assert.match(inquiry.body, /Model \/ konfiguracja: proszę o dobór\./);
  assert.match(inquiry.body, /Wstępna liczba masztów: 1/);
  assert.match(inquiry.body, /Planowany początek wynajmu: do uzgodnienia/);
  assert.match(inquiry.body, /Planowany okres wynajmu: do uzgodnienia/);
  assert.doesNotMatch(inquiry.body, /\bundefined\b|\bnull\b/);
  assert.doesNotMatch(inquiry.body, /Powierzchnia \/ wymiary terenu:|Planowane godziny pracy:|Dostępne zasilanie:|klimatyzac|nagrzewnic/i);
  assert.match(buildInquiry({ location: 'Poznań', quantity: 99 }).body, /Wstępna liczba masztów: 99/);
});

test('all catalog slugs and human-readable model names produce the expected model', () => {
  for (const [input, expected] of [
    ['atlas-copco-hilight', 'Atlas Copco HiLight'],
    ['  ATLAS COPCO HILIGHT  ', 'Atlas Copco HiLight'],
    ['generac-v20-pro', 'Generac V20 PRO'],
    ['Generac V20 PRO', 'Generac V20 PRO'],
  ]) {
    const inquiry = buildInquiry({ location: 'Warszawa', model: input });
    assert.ok(inquiry.body.includes(`Model: ${expected}`));
    assert.ok(inquiry.subject.includes(expected));
  }
});

test('site area and working hours never calculate equipment quantity or power', () => {
  const inquiry = buildInquiry({
    location: 'Gdańsk',
    area: '100 000 m²',
    operatingHours: 'Całą noc, do uzgodnienia',
  });
  assert.match(inquiry.body, /Powierzchnia \/ wymiary terenu: 100 000 m²/);
  assert.match(inquiry.body, /Planowane godziny pracy: Całą noc, do uzgodnienia/);
  assert.match(inquiry.body, /Wstępna liczba masztów: 1/);
  assert.match(inquiry.body, /proszę o dobór/);
  assert.doesNotMatch(inquiry.body, /\bkW\b|\bkVA\b|obliczon|zalecan.*liczb/i);
});

test('empty and whitespace-only locations cannot produce an inquiry', () => {
  for (const location of [undefined, null, '', '   ', '\n\t']) {
    assert.throws(() => buildInquiry({ location }), TypeError);
  }
});

test('invalid quantities are rejected instead of sending an unusable request', () => {
  for (const quantity of [0, -1, 100, 1.5, 'abc', '', Number.NaN, Number.POSITIVE_INFINITY]) {
    assert.throws(() => buildInquiry({ location: 'Wrocław', quantity }), RangeError);
  }
});
