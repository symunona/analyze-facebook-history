#!/usr/bin / env node

var fs = require("fs");
var analyze = require("./analyze");
var help = fs.readFileSync('./readme.md', 'utf8');

if (process.argv.indexOf('--help') > -1 || process.argv.length < 3) {
    console.log(help);
    process.exit();
}

var inputFileName = process.argv[2];
var outputFileName = getUserNameFromRawFileName(inputFileName) + 'filtered.json';
var jsonRaw = JSON.parse(fs.readFileSync(inputFileName, 'utf8'));

var userNames = analyze.getUserNamesFromMessages(jsonRaw);
console.log('Found user names: ');
console.log(userNames);

console.log('Merging usernames in messages');
analyze.mergeMainUser(jsonRaw, userNames);

console.log('Eliminating not interesting group messages. (the ones not addressed and not sent by the analyzed user)');
analyze.removeGroupMessages(jsonRaw);

console.log('Analyzing message emoticons');
analyze.emotions(jsonRaw);

console.log('Exporting to JSON/SQLITE to: ', outputFileName);


fs.writeFileSync(outputFileName, JSON.stringify(jsonRaw));


/** 
 * Example: 'facebook-testuser.zip' will return 'testuser'
 * @returns username
 */

function getUserNameFromRawFileName(fileName) {
    return fileName.substr(0, fileName.length - 5 - 3);
}