//FILE SYSTEM
const fs = require('fs');
//CREATE FILE
fs.writeFileSync('example.txt', 'Hello, Node.js!')
console.log('File created successfully')

// APPEND CONTENT
fs.appendFileSync('example.txt', '\nAppended Text');
console.log('Content appended');

//READ CONTENT 
let data = fs.readFileSync('example.txt', 'utf8');
console.log('File Content:', data);

// RENAME FILE
fs.renameSync('example.txt', 'newname.txt');
console.log('File renamed .');

//GET FILE INFORMATION
let stats = fs.statSync('newname.txt');
console.log(stats);

//CHECK FOR FILE EXIST
if (fs.existsSync('newname.txt')) {
    console.log('File exists');
} else {
    console.log('File does not exist');
}


