// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'project title',
            message: 'Write a project title for your README',
          },
          {
            type: 'input',
            name: 'installation instructions',
            message: 'Write your installation instructions for your application',
          },
          {
            type: 'input',
            name: 'usage information',
            message: 'Write any usage information for your application',
          },
          {
            type: 'input',
            name: 'contribution guidelines',
            message: 'Write any contribution guidelines for your application',
          },
          {
            type: 'input',
            name: 'test instructions',
            message: 'Write any test instructions for your application',
          },
          {
            type: "checkbox",
            message: "Select a license for your application",
            name: "license",
            choices: [
              { name: "MIT", value: "MIT" },
              { name: "ISC", value: "ISC" },
              { name: "Mozilla", value: "Mozilla" },
              { name: "Apache", value: "Apache" },
              { name: "EPL", value: "EPL" },
              { name: "WTFPL", value: "WTFPL" },
              { name: "None", value: "none" },
            ],
          },
          {
            type: "input",
            message: "What is your github username?",
            name: "gitName",
          },
          {
            type: "input",
            message: "What is your email address?",
            name: "email",
          },
          {
            type: "input",
            message: "Instructions for how to reach you: ",
            name: "prefCom",
          },
    ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
