// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// fs is a Node standard library package for reading and writing files
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// questions template from activities 19 and 20
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of the project.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        // license options from https://www.gnu.org/licenses/license-recommendations.en.html
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'Other', 'None'],
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Any information pertaining to usage?',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Any information pertaining to contributing?',
      },
];

// TODO: Create a function to write README file
// function to write README file
function writeToFile(fileName, data) {
    // syntax file path, data, options
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    console.log("Your README has been successfully created!")
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
      });
}

// Function call to initialize app
init();
