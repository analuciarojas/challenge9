
// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your projects description? (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter your installation steps!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed. (Required)',       
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide your usage instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please enter your GitHub Username. (Required)',       
        validate: creditsInput => {
            if (creditsInput) {
                return true;
            } else {
                console.log('Please enter your GitHub Username!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose which license you will use for your project (Required)',       
        choices: ['agpl','MIT', 'GNU', 'Apache', 'No license'],
    },
    {
        type: 'checkbox',
        name: 'badges',
        message: 'Select the technologies used in your application.',
        choices: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js','Jquery'],
        default: 0,
        /*when: ({ contents }) => {
            if (contents.indexOf('Built With') > -1) {
                return true;
            } else {
                return false;
            }
        }*/
    }, 
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide guidelines for contributors. (Required)',
        when: ({ contributeInput }) => {
            if (contributeInput) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                console.log('Please enter guidelines for contributors!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide test instructions for your application.',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please provide test instructions for your application!');
                return false;
            }
        }
    },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, err => {
        if (err) {
            throw err
        };
        console.log('Yay your README file was created!')
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};


// Function call to initialize app
init();