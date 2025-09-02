const { faker } = require("@faker-js/faker");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // await knex.schema.raw('truncate user_id cascade');
  await knex('items').del()

  let data = []
  for( let n = 0; n <= 100; n++ ){
    data.push(
      {
        user_id: (Math.floor(Math.random() * 3) + 1),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        quantity: (Math.floor(Math.random() * 100) + 1)
      }
    )
  }

  await knex('items').insert(data);
};
