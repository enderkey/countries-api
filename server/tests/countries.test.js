const supertest = require('supertest');

const { app, server } = require('../index');

const api = supertest(app);

test('Countries are returned as JSON', async () => {
  await api
    .get('/v1/countries')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('Returns an array', async () => {
  const { body } = await api.get('/v1/countries');
  expect(Array.isArray(body)).toBe(true);
});

test('Returns an every value', async () => {
  const {
    body:
      {
        name_en: nameEn,
        name_es: nameEs,
        dial_code: dialCode,
        code,
      },
  } = await api.get('/v1/countries/?code=uy');
  expect(Boolean(nameEn || nameEs)).toBe(true);
  expect(Boolean(dialCode)).toBe(true);
  expect(Boolean(code)).toBe(true);
});

test('Returns spanish name', async () => {
  const {
    body:
      {
        name_en: nameEn,
        name_es: nameEs,
      },
  } = await api.get('/v1/countries/?code=uy&lang=es');
  expect(Boolean(!nameEn && nameEs)).toBe(true);
});

test('Returns english name', async () => {
  const {
    body:
      {
        name_en: nameEn,
        name_es: nameEs,
      },
  } = await api.get('/v1/countries/?code=uy&lang=en');
  expect(Boolean(nameEn && !nameEs)).toBe(true);
});

test('Returns spanish name on list', async () => {
  const { body } = await api.get('/v1/countries/?lang=es');
  expect(body.every(({
    name_en: nameEn,
    name_es: nameEs,
  }) => Boolean(!nameEn && nameEs))).toBe(true);
});

test('Returns english name on list', async () => {
  const { body } = await api.get('/v1/countries/?lang=en');
  expect(body.every(({
    name_en: nameEn,
    name_es: nameEs,
  }) => Boolean(nameEn && !nameEs))).toBe(true);
});

afterAll(() => {
  server.close();
});
