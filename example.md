[![Generic badge](https://img.shields.io/badge/license-MIT-<COLOR>.svg)](https://shields.io/)

**# README Generator**   

**## Description**

Have you ever wanted to write up a README without having to worry about the appearance?  This project does the visual work for you by creating standard headers and inputing in the information for you.  It is your easy README Generator.

**## Table of Contents**

- [Installation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [Contributors](#contributors)
- [Test Instructions](#test-instructions)
- [License](#license)
- [Questions](#questions)


## Installation Instructions

You can install this program by cloning it to your local machine.`git clone git@github.com:MikChanna/READMEGenerator.git`.  After cloning it to your local machine - you may delete the README.MD and run the js file in your terminal by using node.
Inquirer is require for this program to work so be sure to install in using: `npm i inquirer`

## Usage Information

After installing the program, run it in your terminal using node.`node index`.  The program will then prompt you to enter in information about your program such as the title, description, installation instructions, usage information, contributers, and test instructions.  It will also prompt you to choose a license from a list for you program and prompting you to enter in your github link and email address. After entering in your email address the program will write a new file called `README.md` and there goes your newly generated README.  Unfortunately, inquirer prompts will not recognize line breaks so write all of your responses on one line, then you may go back in the file and add your line breaks.


## Contributors

Channa Mik Carlson

## Test Instructions

${answers.test}

## License

${answers.license}

## Questions

For any questions about the project, please feel free to reach out to me on github or via email.  Thank you for veiwing this project!

https://github.com/MikChanna

channa.mik@gmail.com