const template = `
**# ${answer.title}**

**## Description**

${answer.description}

**## Table of Contents**

1.  [Installation_Instructions](https://github.com/MikChanna/READMEGenerator/blob/master/README.md#installation-instructions)
2.  [Usage_Information](https://github.com/MikChanna/READMEGenerator/blob/master/README.md#usage-information)
3.  [Contribution](https://github.com/MikChanna/READMEGenerator/blob/master/README.md#contribution)
4.  [Test_Instructions](https://github.com/MikChanna/READMEGenerator/blob/master/README.md#test-instructions)
5.  [License](https://github.com/MikChanna/READMEGenerator/blob/master/README.md#license)
6.  [Questions](https://github.com/MikChanna/READMEGenerator/blob/master/README.md#questions)


**## Installation Instructions**

${answer.installation}

**## Usage Information**

${answer.usage}

**## Contribution**

${answer.contribution}

**## Test Instructions**

${answer.test}

**## License**

${answer.license}

**## Questions**

For any questions about the project, please feel free to reach out to me on github or via email.  Thank you for veiwing this project!
${answer.github}
${answer.Email}

`;
