// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')


// TODO: Create an array of questions for user input
const questions = ["What is your project title?", "What is the project's description?", "What problem does it solve?", 'What?'];
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
fileContent += usage;

const license = `## License \n \n \n \n`;
fileContent += license;

const contributing = `## Contributing \n \n \n \n`;
fileContent += contributing;

const tests = `## Tests \n \n \n \n`;
fileContent += tests;

const readmeQuestions = `## Questions \n \n \n \n`;
fileContent += readmeQuestions;



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
      message: 'testing',
      name: 'test',
    },
  ])
  .then((response) => {
    const description = `## Description \n \n \n \n`;
    fileContent += description;
    fileContent += response.description;

    const tableContents = `## Table of Contents \n \n \n \n`;
    fileContent += tableContents;
    fileContent += response.tableContents;

    const installation = `## Installation \n \n \n \n`;
    fileContent += installation;
    fileContent += response.installation;

    const usage = `## Usage \n \n \n \n`;
    fileContent += usage;
    fileContent += response.usage;

    const license = `## License \n \n \n \n`;
    fileContent += license;
    fileContent += response.license;

    const contributing = `## Contributing \n \n \n \n`;
    fileContent += contributing;
    fileContent += response.contributing;

    const tests = `## Tests \n \n \n \n`;
    fileContent += tests;
    fileContent += response.tests;


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
function init() {}

// Function call to initialize app
init();
