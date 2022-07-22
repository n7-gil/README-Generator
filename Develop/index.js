// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = ["What is your project title?"];
let fileContent = "";

// console.log(questions[0]);

const answerTitle = `# Title  \n \n \n \n`;
fileContent += answerTitle;

const description = `## Description \n \n \n \n`;
fileContent += description;

const tableContents = `## Table of Contents \n \n \n \n`;
fileContent += tableContents;

const installation = `## Installation \n \n \n \n`;
fileContent += installation;

const usage = '## Usage \n \n \n \n';
fileContent += usage;

const license = `## License \n \n \n \n`;
fileContent += license;

const contributing = `## Contributing \n \n \n \n`;
fileContent += contributing;

const tests = `## Tests \n \n \n \n`;
fileContent += tests;

const readmeQuestions = `## Questions \n \n \n \n`;
fileContent += readmeQuestions;

const github = `## Github \n \n \n \n`;
fileContent += github;

const email = `## Email \n \n \n \n`;
fileContent += email;



inquirer
  .prompt([
    {
      type: 'input',
      message: 'Project name',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Project description',
      name: 'discription',
    },
    {
      type: 'input',
      message: 'Installation instructions',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What problem is this app solving?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What did you work on in the project?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'What testing procedures did you use?',
      name: 'test',
    },
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
  ])
.then((response) => {
        const answerTitle = `## Title \n \n \n \n`;
        fileContent += answerTitle;

        fileContent += response.answerTitle     
});


writeToFile('newreadme.md', fileContent);



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('Success! New file created');
    });

    // console.log(writeToFile);
}


// TODO: Create a function to initialize app
async function init() {
// let responses = await inquirer.prompt();

// let fileContent = generateMarkdown(responses);

// fs.writeFile(fileName, data, function (err) {
//   if (err) throw err;
//   console.log('Success! New file created');
// });


}

// Function call to initialize app
init();
