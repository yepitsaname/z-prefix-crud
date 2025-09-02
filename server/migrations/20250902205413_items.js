/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('items', table =>{
    table.increments('item_id');
    table.integer('user_id');
    table.string('name', 40);
    table.string('description', 1024);
    table.integer('quantity');
    table.foreign('user_id').references('users.user_id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('items', table =>{
    table.dropForeign('user_id');
  })
  .then(()=>{
    return knex.schema.dropTableIfExists('items');
  })
};
