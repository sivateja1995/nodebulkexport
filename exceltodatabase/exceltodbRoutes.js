const xlsxj = require("xlsx-to-json");
const path = require('path');

var files = path.join(__dirname, "/files/");

xlsxj({
    input: path.join(files, "bcd.xlsx"),
    output: path.join(files, "bcd.json")
}, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});