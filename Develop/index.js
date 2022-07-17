// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')


// TODO: Create an array of questions for user input
const questions = ["What is your project title?", "Who is the target audience for the application?", "What problem does it solve?", 'What did you learn?'];
let fileContent = "";

console.log(questions[0]);

const answerTitle = `# ${process.argv[2]} \n \n \n \n`;
console.log(answerTitle);
fileContent += answerTitle;

const description = `## Description \n \n \n \n`;
fileContent += description;

const tableContents = `## Table of Contents \n \n \n \n`;
fileContent += tableContents;

const installation = `## Installation \n \n \n \n`;
fileContent += installation;

const usage = '## Usage \n \n \n \n';
fileContent += installation;

const license = `## License \n \n \n \n`;
fileContent += license;

const contributing = `## Contributing \n \n \n \n`;
fileContent += contributing;

const tests = `## Tests \n \n \n \n`;
fileContent += tests;

const readmeQuestions = `## Questions \n \n \n \n`;
fileContent += readmeQuestions;


fs.writeFile('newreadme.md', fileContent, function (err) {
    if (err) throw err;
    console.log('Success! New file created');
});



// TODO: Create a function to write README file
function writeToFile(fileName, data) {



    // console.log(writeToFile);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
