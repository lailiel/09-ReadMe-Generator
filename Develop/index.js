// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Re-enter What is the title of your project?',
      name: 'project',
    },
    {
        type: 'input',
        message: 'Describe your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test',
    },
    
  ])
}



// TODO: Create a function to write README file
const generateReadme = ({github, email, project, description, install, usage, contribution, test}) =>
`This is a test,
${github}:
${email}:
${project}:
${description}:
${install}:
${usage}:
${contribution}:
${test}:
this is the end of the test.`
// fill this out with readme format stuff


// TODO: Create a function to initialize app

const init = () => {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => fs.writeToFile('README.md', generateReadme(answers))) 
      .then(() => console.log('Successfully created README'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
