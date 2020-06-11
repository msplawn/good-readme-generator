// function to generate markdown for README

// var licenceLink;
// var licenceIMG;
function generateMarkdown(data) {
//   switch(data.license)  {
//     case "Apache":
//       licenceIMG = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
//       licenceLink = 'https://opensource.org/licenses/Apache-2.0';
//     case "MIT":
//       licenceIMG = 'https://img.shields.io/badge/License-MIT-yellow.svg';
//       licenceLink = 'https://opensource.org/licenses/MIT';
//   }

  return `# **${data.title}**                 [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

  # Project Description
  ${data.description}

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  
  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # License
  ${data.license}

  # Contributors
  ${data.contributors}

  # Tests
  ${data.tests}

  # Questions
  If you have any further questions feel free to contact me on Github ${data.github} or email me at ${data.email}!


`;
}

module.exports = generateMarkdown;
