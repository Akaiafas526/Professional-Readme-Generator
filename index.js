const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "Project Title: ",
      name: "title",
    },
    {
      type: "input",
      message: "Description: ",
      name: "description",
    },
    {
      type: "input",
      message: "Installation: ",
      name: "installation",
    },
    {
      type: "input",
      message: "Usage: ",
      name: "usage",
    },
    {
      type: "input",
      message: "Contributing: ",
      name: "contributing",
    },
    {
      type: "input",
      message: "Tests: ",
      name: "tests",
    },
    {
      type: "input",
      message: "Questions: ",
      name: "questions",
    },
    {
      type: "input",
      message: "Github: ",
      name: "github",
    },
    {
      type: "input",
      message: "Email: ",
      name: "email",
    },
    {
      type: "list",
      message: "Please choose your license: ",
      name: "license",
      choices: [
        "Apache 2.0",
        "BSD 3-Clause",
        "BSD 2-Clause",
        "GNU GPL v3",
        "GNU GPL v2",
        "GNU AGPL v3",
        "GNU LGPL v3",
        "GNU FDL v1.3",
        "MIT",
        "MPL 2.0",
      ],
      default: "MIT",
    },
  ])
  .then((response) => {
    // console.log(response);
    createMd(response);
  });

function newLicense(license) {
  switch (license) {
    case "Apache 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "BSD 3-Clause":
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case "BSD 2-Clause":
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case "GNU GPL v3":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "GNU GPL v2":
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;
    case "GNU AGPL v3":
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    case "GNU LGPL v3":
      return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
      break;
    case "GNU FDL v1.3":
      return `[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)`;
      break;
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "MPL 2.0":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
}

function createMd(response) {
  const markDown = `
# ${response.title}
## Description
${response.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)
## Installation
${response.installation}
## License
${newLicense(response.license)}
## Usage
${response.usage}
## Contributing
${response.contributing}
## Tests
${response.tests}
## Questions
${response.questions}

## Contact:
+ [Github](https://www.github.com/${response.github})

+ Email: ${response.email}
`;
  createFileMd(markDown);
}

function createFileMd(data) {
  fs.writeFileSync("generatedreadme/ReadMe.md", data, (err) => {
    // err ? console.log(err) : console.log("It works!")
    if (err) {
      console.log(err);
    } else {
      console.log("Your file has been created!");
    }
  });
}
