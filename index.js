// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { stringify } = require('querystring');
const genMD = require("./utils/generateMarkdown");
//const renderLicenseBadge = require("./utils/generateMarkdown")
const Choices = require('inquirer/lib/objects/choices');
var licenseType;
var licenseWebsite;
var readmebody;
var lists;

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
    {
      type: 'input',
      message: 'Please provide a short description of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How would a user install your program?',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the intended use of your program?',
        name: 'usage',
      },
    {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'license',
        choices: ["MIT", "Apache", "Boost", "BSD 3-Clause License", "Creative Commons Zero v1.0 Universal", "Eclipse", "GNU GPL v3", "IBM Public License Version 1.0", "ISC", "Mozilla Public License 2.0", "The Perl License", "SIL Open Font License 1.1", ]
    },
    {
        type: 'input',
        message: 'Who helped you on this project?',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'What tests were done on this project?',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitUserName',
      },
      {
        type: 'input',
        message: 'What is the best contact email?',
        name: 'email',
      },
  ])
  .then((answers) =>{
    console.log(answers.title,answers.description,answers.installation,answers.usage, answers.license, answers.contributing, answers.tests, answers.gitUserName, answers.email)
    var list ={
        title : answers.title,
        description : answers.description,
        installation : answers.installation,
        usage : answers.usage,
        license : answers.license,
        contributing : answers.contributing,
        tests : answers.tests,
        gitUserName : answers.gitUserName,
        email : answers.email
    }
    var lists = JSON.stringify(list);
    console.log("License type " + list.license);
    genMD.renderLicenseBadge(list.license);

    writeToFile('README.md',list);
    genMD.renderLicenseLink(list.license);
//     fs.appendFile('log.txt', `${lists}\n`, (err) =>
// err ? console.error(err) : console.log('Commit logged!')
// );
})

    //console.log(answers.title, answers.description, answers.installation, answers.license, answers.contributing, answers.tests, answers.gitUserName, answers.email)
    // var lists = JSON.stringify(answers);
    // console.log(lists);
    // writeToFile('README.md',lists)
//     fs.appendFile('log.txt', `${lists}\n`, (err) =>
// err ? console.error(err) : console.log('Commit logged!')
// );
// }
//   );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //generateMarkdown(data);
    console.log(data)
    console.log(fileName);
    lists = genMD.generateMarkdown(data);
    console.log(lists)
    //fs.writeFile(fileName, generateMarkdown(data))
    fs.appendFile("README.md", `${lists}`, (err) =>
    err ? console.error(err) : console.log('Commit logged data to readme!')
    );}

// TODO: Create a function to initialize app
////function init() {
    //what code fires first
////}

// Function call to initialize app
////init();





