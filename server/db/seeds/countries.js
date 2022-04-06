const fs = require('fs');
const path = require('path');

exports.seed = async (knex) => {

  const countries = await fs.readFileSync(path.join(__dirname, '../countries.json'), 'utf-8');

  return knex('countries').del()
    .then(function () {
      return knex('countries').insert(JSON.parse(countries));
    });
};