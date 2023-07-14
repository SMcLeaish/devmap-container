/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const personnelData = require('../data/personnel.json');

exports.seed = async function (knex) {
  await knex('personnel').del();
  await knex('personnel').insert(personnelData.map(personnel => {
      personnel.geocode = JSON.stringify(personnel.geocode)
      return personnel
  }))
};
