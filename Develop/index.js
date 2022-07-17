// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')


// TODO: Create an array of questions for user input
const questions = ["What is your project title?", "Who is the target audience for the application?", "What problem does it solve?", 'What did you learn?'];

console.log(questions[0]);

const answerTitle = `# ${process.argv[2]}`;
console.log(answerTitle);

fs.writeFile('newreadme.md', answerTitle, function (err) {
    if (err) throw err;
    console.log('Success!');
});



// TODO: Create a function to write README file
function writeToFile(fileName, data) {



    // console.log(writeToFile);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
