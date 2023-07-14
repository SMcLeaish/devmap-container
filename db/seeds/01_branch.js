/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE branch CASCADE')
  // await knex('')
  // await knex('personnel').del()
  await knex('branch').del()
  await knex('branch').insert([
    {id: 1, branch: 'army'},
    {id: 2, branch: 'navy'},
    {id: 3, branch: 'marine_corps'},
    {id: 4, branch: 'air_force'},
    {id: 5, branch: 'space_force'},
    {id: 6, branch: 'coast_guard'}
  ]);
};
