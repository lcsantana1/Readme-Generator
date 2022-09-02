// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    }, 
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'Table of contents.',
        name: 'Table of Contents.',
    },
    {
        type: 'input',
        message: 'What does the user need to install to run this app?',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'How is this app used? Give instructions',
        name: 'Usage',
    },
    {
        type: 'list',
        message: 'What is the license used for your project?',
        name: 'license',
        choices:['1','2','3','4','None']
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'Contributing',
    },
    {
        type: 'input',
        message: 'What commands are needed to test this app?',
        name: 'Tests',
    },
    {
        type: 'input',
        message: 'Contact info for inquiries.',
        name: 'Questions',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'Username',
    },
    {
        type: 'input',
        message: 'What is your github email address?',
        name: 'Email', 
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile('README.md', generateMarkdown(response))
        },
        {

        }

        );


}

// Function call to initialize app
init();
