const {hash} = require('../utils/auth');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  let hashAndSecret = [];
  for( let i = 0; i < 4; i++ ){
    hashAndSecret.push( await hash('password') )
  }
  await knex('users').insert([
    {first_name: 'Bobba', last_name: 'Fett', username: 'BFett1', password: hashAndSecret[0][0], secret: hashAndSecret[0][1]},
    {first_name: 'Bobba', last_name: 'Fett', username: 'BFett2', password: hashAndSecret[1][0], secret: hashAndSecret[1][1]},
    {first_name: 'Bobba', last_name: 'Fett', username: 'BFett3', password: hashAndSecret[2][0], secret: hashAndSecret[2][1]},
    {first_name: 'my', last_name: 'guy', username: 'myguy', password: hashAndSecret[3][0], secret: hashAndSecret[3][1]}
  ]);
};
