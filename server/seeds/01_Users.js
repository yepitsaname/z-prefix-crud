/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {first_name: 'Bobba', last_name: 'Fett', username: 'BFett1', password: 'password'},
    {first_name: 'Bobba', last_name: 'Fett', username: 'BFett2', password: 'password'},
    {first_name: 'Bobba', last_name: 'Fett', username: 'BFett3', password: 'password'},
    {first_name: 'my', last_name: 'guy', username: 'myguy', password: 'password'}
  ]);
};
