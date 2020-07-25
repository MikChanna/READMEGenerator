const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
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
  ]);
}

promptUser();

// function generateHTML(answers) {
//   return `
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//     <title>Document</title>
//   </head>
//   <body>
//     <div class="jumbotron jumbotron-fluid">
//     <div class="container">
//       <h1 class="display-4">Hi! My name is ${answers.name}</h1>
//       <p class="lead">I am from ${answers.location}.</p>
//       <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//       <ul class="list-group">
//         <li class="list-group-item">My GitHub username is ${answers.github}</li>
//         <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
//       </ul>
//     </div>
//   </div>
//   </body>
//   </html>`;
// }

// promptUser()
//   .then(function (answers) {
//     const html = generateHTML(answers);

//     return writeFileAsync("index.html", html);
//   })
//   .then(function () {
//     console.log("Sucvessfully wrote to index.html");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
