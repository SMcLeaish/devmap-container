import fs from 'fs';
import { faker } from '@faker-js/faker';

const branches = ["USMC", "Army", "Navy", "Air Force", "Space Force"];
const locations = [[40.7128, 74.0060], [34.0522, 118.2437], [41.8781, 87.6298], [29.7604, 95.3698], [39.7392, 104.9903]];
const clearances = ['Top Secret', 'Secret', 'Confidential']
const units = [
    "1st Marine Division",
    "2nd Marine Division",
    "82nd Airborne Division",
    "3rd Infantry Division",
    "10th Mountain Division",
    "101st Airborne Division",
    "Naval Surface Warfare Center",
    "Naval Submarine Base New London",
    "509th Bomb Wing",
    "60th Air Mobility Wing",
    "355th Wing",
    "432nd Wing",
    "Space Operations Command",
    "Space Delta 2",
    "Space Delta 8"
];
  
const ranks = [
    "Private", 
    "Private First Class", 
    "Lance Corporal", 
    "Corporal",
    "Sergeant",
    "Staff Sergeant",
    "Sergeant First Class",
    "Master Sergeant",
    "First Sergeant",
    "Sergeant Major",
    "Second Lieutenant",
    "First Lieutenant",
    "Captain",
    "Major",
    "Lieutenant Colonel",
    "Colonel",
    "Seaman Recruit",
    "Seaman Apprentice",
    "Seaman",
    "Petty Officer Third Class",
    "Petty Officer Second Class",
    "Petty Officer First Class",
    "Chief Petty Officer",
    "Senior Chief Petty Officer",
    "Master Chief Petty Officer",
    "Ensign",
    "Lieutenant Junior Grade",
    "Lieutenant",
    "Lieutenant Commander",
    "Commander",
    "Captain",
    "Specialist",
    "Airman Basic",
    "Airman",
    "Airman First Class",
    "Senior Airman",
    "Staff Sergeant",
    "Technical Sergeant",
    "Master Sergeant",
    "First Sergeant",
    "Senior Master Sergeant",
    "First Sergeant",
    "Chief Master Sergeant",
    "Command Chief Master Sergeant",
    "Second Lieutenant",
    "First Lieutenant",
    "Captain",
    "Major",
    "Lieutenant Colonel",
    "Colonel"
];
  
let personnel = [];

for (let i = 0; i < 10000; i++) {

    personnel.push({
        id: i + 1,
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        clearance: faker.helpers.arrayElement(clearances),
        has_skill_identifier: faker.datatype.boolean(),
        arrived_on_station: faker.date.past().toISOString().split('T')[0],
        is_civilian: faker.datatype.boolean(),
        rank: faker.person.jobTitle(),
        email: faker.internet.email(),
        geocode: `${locations[i % locations.length][0]}, ${locations[i % locations.length][1]}`,
        branch_id: faker.helpers.arrayElement(branches),
        unit: faker.helpers.arrayElement(units)
    });
}

fs.writeFile('personnel.json', JSON.stringify(personnel, null, 2), (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

