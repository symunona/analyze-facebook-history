#!/usr/bin / env node

var fs = require("fs");
var analyze = require("./analyze");
var help = fs.readFileSync('./readme.md', 'utf8');

if (process.argv.indexOf('--help') > -1 || process.argv.length < 3) {
    console.log(help);
    process.exit();
}

var inputFileName = process.argv[2];
var jsonRaw = JSON.parse(fs.readFileSync(inputFileName, 'utf8'));

var userNames = analyze.getUserNamesFromMessages(jsonRaw);
console.log('Found user names: ');
console.log(userNames);

console.log('Merging usernames in messages');
analyze.mergeMainUser(jsonRaw, userNames);

console.log('Eliminating not interesting group messages. (the ones not addressed and not sent by the analyzed user)');
// analyze.removeGroupMessages(jsonRaw);

console.log('Analyzing message emoticons');
//analize.emotions(jsonRaw);

console.log('Exporting to JSON/SQLITE');