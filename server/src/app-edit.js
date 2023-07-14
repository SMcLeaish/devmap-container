const express = require('express');
var cors = require('cors')
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js')["development"]);
const cookieParser = require('cookie-parser');
app.use(cookieParser());



app.use(cors());
app.use(express.json())
app.get('/', (req, res) => {
    res.send('Application up and running!')
})

app.get('/branch', cors(), (req, res) => {
    knex('branch')
        .select('*')
        .then(result => {
            var branches = result.map(branch => branch)
            res.json(branches);
        })
})

app.get('/unit', cors(), (req, res) => {
    knex('unit')
        .select('*')
        .then(result => {
            var unitArray = result.map(unit => unit)
            res.json(unitArray);
        })
})

app.get('/installation', cors(), (req, res) => {
    knex('installation')
        .select('*')
        .then(result => {
            var installationArray = result.map(installation => installation)
            res.json(installationArray);
        })
})

app.get('/personnel', cors(), (req, res) => {
    knex('personnel')
        .select('*')
        .then(result => {
            var personnelArray = result.map(prsnl => prsnl)
            res.json(personnelArray);
        })
})

app.post('/test', async (req, res) => {
    let userToAdd = req.body.data;

    console.log("Adding a new user:", userToAdd.name)

    // if(req.cookies.idCookie) {
    //     res.cookie('idCookie', [...req.cookies.idCookie, userToAdd.id.toString()]);
    // } else {
    //     res.cookie('idCookie', [userToAdd.id.toString()]);
    // }

    //pushing new user to our personnelArray with the correct keys
    userToAdd = {
        'name': userToAdd.name,
        'clearance': userToAdd.clearance,
        'has_skill_identifier': userToAdd.has_skill_identifier,
        'arrived_on_station': userToAdd.arrived_on_station,
        'is_civilian': userToAdd.is_civilian,
        'mos': userToAdd.mos,
        'rank': userToAdd.rank,
        'email': userToAdd.email,
        'geocode': userToAdd.geocode,
        'mgrs': userToAdd.mgrs,
        'branch_id': userToAdd.branch_id,
        'unit_id': userToAdd.unit_id,
        'installation_id': userToAdd.installation_id,
        'photo': userToAdd.photo
    }

    // personnelArray.push((usersToPush));
    try {
        await knex('personnel').insert(userToAdd);
        res.status(200).send('User added successfully');
    } catch (error) {
        res.status(500).send('Error inserting user to the database');
        console.error(error);
    }
    // //Checking for malformed request or bad status code
    // if(Object.keys(usersToAdd).toString() != [ 'id', 'username', 'userGeocode', 'userEmail', 'userRank' ].toString()){
    //     res.send(`Request body content malformed, expected a complete book JSON object`);
    //     throw new Error(`Request body content malformed, expected a complete book JSON object`);
    // }

    // if(res.statusCode != 200) {
    //     throw new Error(`Server response not good, server code:${res.statusCode}`)
    // }

})

app.patch('/update', (req, res) => {
    if (res.statusCode != 200) {
        throw new Error(`Sever response not good, server code: ${res.statusCode}`)
    }

    let requestedID = req.params.id;
    let userToUpdate = req.body.data;

    let { name, clearance, has_skill_identifier, arrived_on_station, is_civilian, mos, rank, email, geocode, mgrs, branch_id, unit_id, installation_id, photo } = req.body;

    userToUpdate.forEach((personnel, index) => {
        if (personnel.id == requestedID) {
            if (name) { userToUpdate[index].name = name };
            if (clearance) { userToUpdate[index].clearance = clearance };
            if (has_skill_identifier) { userToUpdate[index].has_skill_identifier = has_skill_identifier };
            if (arrived_on_station) { userToUpdate[index].arrived_on_station = arrived_on_station };
            if (is_civilian) { userToUpdate[index].is_civilian = is_civilian };
            if (mos) { userToUpdate[index].mos = mos };
            if (rank) { userToUpdate[index].rank = rank };
            if (email) { userToUpdate[index].email = email };
            if (geocode) { userToUpdate[index].geocode = geocode };
            if (mgrs) { userToUpdate[index].mgrs = mgrs };
            if (branch_id) { userToUpdate[index].branch_id = branch_id };
            if (unit_id) { userToUpdate[index].unit_id = unit_id };
            if (installation_id) { userToUpdate[index].installation_id = installation_id };
            if (photo) { userToUpdate[index].photo = photo };
            res.send(personnel);
        }
    });
})

app.get('/search/:installation_id', (req, res) => {
    const { installation_id } = req.params
    res.send('testing it works')
    getAllPersonnelFromInstallation(installation_id)
})

function getAllPersonnelFromInstallation(installation) {
    return knex.select()
        .from("personnel")
        .where( "installation_id", (knex.select('id').from("installation").where('installation', installation)) )
}

app.listen(port, () => {
    console.log(`Server running at ${port}.  Let's see some queries!`)
})