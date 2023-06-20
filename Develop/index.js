// node packages that are being used for this command line application. 

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

//questions for the prompts for generating the README
const questions = [
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Write a project title for your README:',
          },
          {
            type: 'input',
            name: 'description',
            message: 'Write the description of your project:',
          },
          {
            type: 'input',
            name: 'installationInstructions',
            message: 'Write your installation instructions for your application:',
          },
          {
            type: 'input',
            name: 'usageInformation',
            message: 'Write any usage information for your application:',
          },
          {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'Write any contribution guidelines for your application:',
          },
          {
            type: 'input',
            name: 'testInstructions',
            message: 'Write any test instructions for your application:',
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
];

// This function writes all the information based on the input from the user to the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (error) => {
      if (error) {
        console.error('An error occurred while writing the file:', error);
      } else {
        console.log('File has been written successfully!');
      }
    });
  }

// This intializes the entire application
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("NEW-README.md", answers);
  });
}

init();