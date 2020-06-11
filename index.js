const inquirer = require('inquirer');
var fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Enter a short description of your project.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'How do you install the project?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'How do you use this application?',
            name: 'usage'
        },
        {
            type: "checkbox",
            message: 'Select your licenses.',
            name: 'license',
            choices: [
                "Apache",
                "MIT",
                "GNU GPLv3",
                "ISC"
            ]
        },
        {
            type: 'input',
            message: 'Who contributed to this project?',
            name: 'contributors'
        },
        {
            type: 'input',
            message: 'Enter a link to any tests.',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'github'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        }
    
    ];
    

// function to write README file
function writeToFile(fileName, data)    {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)

}

// function to initialize program
function init() {
    inquirer
    .prompt (questions)
    .then((data) => {
        writeToFile ("README.md", generateMarkdown({...data}))
    }).catch((err) =>   {
        console.log(err);
    })
}


// function call to initialize program
init();

