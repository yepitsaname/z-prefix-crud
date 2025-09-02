/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('user_id');
    table.string('first_name', 40); // Based off of UK Gov Data Standards Catalog of 35 characters
    table.string('last_name', 40); // Based off of UK Gov Data Standards Catalog of 35 characters
    table.string('username', 16); // Arbitrary limit
    table.string('password',16);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
