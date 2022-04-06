const fs = require('fs');
const path = require('path');
const { conn } = require('../db/config/db.config');

const TABLE_COUNTRIES = 'countries';

const get = async ({ filter = {} }) => {
  try {
    const { lang, code } = filter;

    const columns = [lang === 'es' ? 'name_es' : 'name_en', 'dial_code', 'code'];

    const countries = conn.table(TABLE_COUNTRIES)
      .select(columns);

    if (code) {
      const [country] = await countries.where('code', code);

      if (country) {
        const bitmap = await fs.readFileSync(path.join(__dirname, `../assets/flags/${code.toLowerCase()}.png`));
        country.flag = Buffer.from(bitmap).toString('base64');
      }
      return country;
    }

    return await countries;
  } catch (error) {
    console.error('data_access | countries | get | error caught!');
    console.error(error);
    return error;
  }
};

module.exports = { get };
