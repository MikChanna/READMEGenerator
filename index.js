const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(answers) {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter title of project",
      name: "title",
    },
    {
      type: "input",
      message: "Description of project",
      name: "description",
    },
    {
      type: "input",
      message: "How do you install the project?",
      name: "installation",
    },
    {
      type: "input",
      message: "Provide instructions for use",
      name: "usage",
    },
    {
      type: "input",
      message: "Test Instructions",
      name: "test",
    },
    {
      type: "input",
      message: "List your collaborators ",
      name: "credits",
    },
    {
      type: "list",
      name: "license",
      message: "What types of licenses?",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LPGLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      message: "Your github link",
      name: "github",
    },
    {
      type: "input",
      message: "You email address",
      name: "email",
    },
  ]);
}

function generateMD(answers) {
  return `
  **# ${answers.title}**

**## Description**

${answers.description}

**## Table of Contents**

1.  [Installation_Instructions](https://github.com/MikChanna/READMEGenerator/blob/master/README.md#installation-instructions)
2.  [Usage_Information](https://github.com/MikChanna/READMEGenerator/blob/master/README.md#usage-information)
3.  [Contribution](https://github.com/MikChanna/READMEGenerator/blob/master/README.md#contribution)
4.  [Test_Instructions](https://github.com/MikChanna/READMEGenerator/blob/master/README.md#test-instructions)
5.  [License](https://github.com/MikChanna/READMEGenerator/blob/master/README.md#license)
6.  [Questions](https://github.com/MikChanna/READMEGenerator/blob/master/README.md#questions)


**## Installation Instructions**

${answers.installation}

**## Usage Information**

${answers.usage}

**## Contribution**

${answers.credits}

**## Test Instructions**

${answers.test}

**## License**

${answers.license}

**## Questions**

For any questions about the project, please feel free to reach out to me on github or via email.  Thank you for veiwing this project!

${answers.github}

${answers.email}
  `;
}

promptUser()
  .then(function (answers) {
    const markdown = generateMD(answers);

    return writeFileAsync("README.md", markdown);
  })
  .then(function () {
    console.log("Successfully wrote to README.md");
  })
  .catch(function (err) {
    console.log(err);
  });
