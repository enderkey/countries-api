
exports.up = async (knex) => {
  return knex.schema.createTable('countries', (table) => {
    table.increments('id').notNullable().primary();
    table.string('name_en');
    table.string('name_es');
    table.string('dial_code');
    table.string('code');
  });
};

exports.down = (knex) => Promise.all([knex.schema.dropTable('countries')]);
