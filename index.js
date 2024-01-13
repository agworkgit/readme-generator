// 1. Come up with README.md file default structure
// 2. Decide which questions you want to ask and the question format (text,checkbox,etc.)
// 3. License can be a select box
// 4. Handle the user input
// 5. Generate the README.md content based on user input
// 6. Write it all in the README.md file

const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description1",
        message: "What was your motivation?"
    },
    {
        type: "input",
        name: "description2",
        message: "Why did you build this project? (Note: the answer is not 'Because it was a homework assignment.')"
    },
    {
        type: "input",
        name: "description3",
        message: "What problem does it solve?"
    },
    {
        type: "input",
        name: "description4",
        message: "What did you learn?"
    },
    {
        type: "input",
        name: "description5",
        message: "What makes your project stand out?"
    },
    {
        type: "input",
        name: "installation",
        message: "How can the user install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How should the project be used?"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license.",
        choices: ['MIT', 'BSD', 'ETC', 'ETC', 'ETC']
    },
    {
        type: "input",
        name: "contributing",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "How should the user test your project? (Note: Does not require any testing.)"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "checkbox",
        name: "badges",
        message: "Select badges to add:",
        choices: [
            'JavaScript',
            'HTML5',
            'CSS3',
            'Node.js',
            'Figma',
            'DevTools',
            'npm',
            'Yarn',
            'React.js',
            'React Native',
            'Angular',
            'Tailwind CSS',
            'Bootstrap',
            'jQuery',
            'jQuery UI',
            'three.js',
            'd3.js',
            'TensorFlow',
            'MongoDB',
            'Mongoose',
            'Netlify'
            // Add more badges here after updating the generateMarkdown options
          ]
      }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            // Use user feedback for... whatever!!
            const markdown = generateMarkdown(answers);
            writeToFile("README.md", markdown);
            console.log("README.md has been successfully generated!");
        })
        .catch((err) => console.error(err));
}

// function call to initialize program
init();
