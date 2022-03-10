const inquirer = require("inquirer")
const fs = require('fs');



inquirer.prompt([
    {
    type: 'input',
    message: 'Project Title: ',
    name: 'title',
},
{
    type: 'input',
    message: 'Description: ',
    name: 'description',
},
{
    type: 'input',
    message: 'Installation: ',
    name: 'installation',
},
{
    type: 'input',
    message: 'Usage: ',
    name: 'usage',
},
{
    type: 'input',
    message: 'Contributing: ',
    name: 'contributing',
},
{
    type: 'input',
    message: 'Tests: ',
    name: 'tests',
},
{
    type: 'input',
    message: 'Questions: ',
    name: 'questions',
},
{
    type: 'input',
    message: 'Github: ',
    name: 'github',
},
{
    type: 'input',
    message: 'Email: ',
    name: 'email',
},
])
.then((response) => {
    console.log(response)})