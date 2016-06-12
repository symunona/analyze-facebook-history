#!/usr/bin / env node

var fs = require("fs");
var analize = require("./analize");
var help = fs.readFileSync('./readme.md', 'utf8');

if (process.argv.indexOf('--help') > -1 || process.argv.length < 3) {
    console.log(help);
    process.exit();
}

var inputFileName = process.argv[2];
var jsonRaw = JSON.parse(fs.readFileSync(inputFileName, 'utf8'));

var userNames = analize.getUserNamesFromMessages(jsonRaw);
console.log('Found user names: ');
console.log(userNames);

// analize.emotions(jsonRaw);