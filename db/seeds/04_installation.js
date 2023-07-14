/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function (knex) {
  const installations_array = [
    "Joint Base Andrews",
    "Naval Station Norfolk",
    "Fort Bragg",
    "Camp Pendleton",
    "Fort Hood",
    "Fort Campbell",
    "Joint Base Lewis-McChord",
    "Fort Benning",
    "Fort Bragg",
    "Fort Carson",
    "Fort Drum",
    "Fort Gordon",
    "Fort Knox",
    "Fort Lee",
    "Fort Leonard Wood",
    "Fort Riley",
    "Fort Stewart",
    "Fort Bliss",
    "Fort Huachuca",
    "Fort Irwin",
    "Fort Polk",
    "Fort Rucker",
    "Fort Sill",
    "Naval Air Station Pensacola",
    "Naval Base San Diego",
    "Naval Station Great Lakes",
    "Naval Station Pearl Harbor",
    "Marine Corps Base Quantico",
    "Marine Corps Recruit Depot Parris Island",
    "Marine Corps Air Station Miramar",
    "Hurlburt Field",
    "Eglin Air Force Base",
    "MacDill Air Force Base",
    "Tyndall Air Force Base",
    "Patrick Space Force Base",
    "Vandenberg Space Force Base",
    "White Sands Missile Range",
    "Hickam Field",
    "Kirtland Air Force Base",
    "Fort Meade",
    "West Point",
    "United States Military Academy",
    "United States Naval Academy",
    "United States Air Force Academy",
    "United States Coast Guard Academy",
   ]
  // Deletes ALL existing entries
  const installations = installations_array.map((installation, i) => ({ id: i + 1, installation: installation.replace(/\s/g, '_').toLowerCase() }));
  await knex.schema.raw('TRUNCATE installation CASCADE')
  await knex('installation').del()
  await knex('installation').insert(installations);
  module.exports = installations_array
};
