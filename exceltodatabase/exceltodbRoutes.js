const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
xlsxj = require("xlsx-to-json");
const path = require('path');
const exceltodb = require('../models/exceltodb');
const fs = require('fs');

var files = path.join(__dirname, "/files/");

xlsxj({
    input: path.join(files, "locations.xlsx"),
    output: path.join(files, "location.json")
}, function(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});