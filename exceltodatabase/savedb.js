const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');

mongoose.connect("mongodb://localhost:27017/exceltodb", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const jsonSchema = mongoose.Schema({
    region: {
        type: String
    },
    country: {
        type: String
    },
    locationName: {
        type: String
    },
    locationType: {
        type: String
    }
});
const JsonModel = mongoose.model("JsonModel", jsonSchema);

var files = path.join(__dirname, "/files/");

const jsonfile = path.join(files, '/location.json');
let LocationData = fs.readFileSync(jsonfile, 'utf-8');
let Locations = JSON.parse(LocationData);
console.log(Locations);
async function insertjson() {
    try {
        await JsonModel.insertMany(Locations);
        console.log('Done!');
        process.exit();
    } catch (err) {
        console.log(err);
        process.exit();
    }
}
insertjson();