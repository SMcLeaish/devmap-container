/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function (knex) {
  const unitArray = [
    "1st Infantry Division",
    "2nd Infantry Division",
    "3rd Infantry Division",
    "4th Infantry Division",
    "10th Mountain Division",
    "82nd Airborne Division",
    "101st Airborne Division",
    "1st Armored Division",
    "2nd Armored Brigade Combat Team",
    "3rd Armored Brigade Combat Team",
    "1st Cavalry Division",
    "3rd Cavalry Regiment",
    "75th Ranger Regiment",
    "95th Civil Affairs Brigade",
    "1st Marine Division",
    "2nd Marine Division",
    "3rd Marine Division",
    "I Marine Expeditionary Force",
    "II Marine Expeditionary Force",
    "III Marine Expeditionary Force",
    "1st Fighter Wing",
    "2nd Bomb Wing",
    "3rd Wing",
    "1st Special Operations Wing",
    "2nd Air Mobility Wing",
    "3rd Air Mobility Wing",
    "Naval Surface Group Middle Pacific",
    "Submarine Group 2",
    "Submarine Group 9",
    "Carrier Strike Group One",
    "Carrier Strike Group Two",
    "Carrier Strike Group Three",
    "Amphibious Group One",
    "Amphibious Group Two",
    "1st Sustainment Brigade",
    "2nd Sustainment Brigade",
    "3rd Sustainment Brigade",
    "1st Signal Brigade",
    "2nd Signal Brigade",
    "3rd Signal Brigade"
  ];
  // Deletes ALL existing entries
  const units = unitArray.map((unit, i) => ({ id: i + 1, unit: unit.replace(/\s/g, '_').toLowerCase() }));
  await knex.schema.raw('TRUNCATE unit CASCADE')
  await knex('unit').del()
  await knex('unit').insert(units);
  module.exports = unitArray;
};