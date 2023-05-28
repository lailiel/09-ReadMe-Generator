const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown");

const promptUser = () => {
    return inquirer.prompt([
    {
      type: 'input',
      message: 'What is your Github user name?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is the title of your project?',
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
        type: 'list',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        name: 'license',
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




const init = () => {
    promptUser()
   
      .then((answers) => fs.writeFile('README.md', markdown({...answers}), (err)=> console.log(err))) 
      .then(() => console.log('Successfully created README'))
      .catch((err) => console.error(err));
  };


init();
