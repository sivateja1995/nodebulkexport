const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');

// mongoose.connect('mongodb://localhost:27017/healthapp', {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

mongoose.connect('mongodb+srv://tars1729:tars1729@mycluster-eljsg.azure.mongodb.net/healthapp?authSource=admin&replicaSet=MyCluster-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass%20Community&retryWrites=true&ssl=true', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const jsonSchema = mongoose.Schema({
    role: {
        type: String
    },

    languageKey: {
        type: String
    }
});
const location = mongoose.model("role", jsonSchema);

var files = path.join(__dirname, "/files/");

const jsonfile = path.join(files, '/roles.json');
let LocationData = fs.readFileSync(jsonfile, 'utf-8');
let Locations = JSON.parse(LocationData);
console.log(Locations);
async function insertjson() {
    try {
        await location.insertMany(Locations);
        console.log('Done!');
        process.exit();
    } catch (err) {
        console.log(err);
        process.exit();
    }
}
insertjson();