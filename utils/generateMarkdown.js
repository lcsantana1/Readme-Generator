// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.Username}/${data.Email}

  ## Description
  ${data.Description}

  ## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  The following dependencies must be installed to run the application
  ${data.Installation}

  ## Usage
  In order to use this app,
   ${data.Usage}

  # License
  none

  # Contributing
  Contributors: ${data.Contributing}

  # Tests
  The following is needed to run the test:
   ${data.Tests}

  # Questions
  If you have any questions on the application or this repository, please contact me.

   Github: [${data.Username}](https://github.com/lcsantana1)

   Email: [${data.Email}](https://github.com/lcsantana1)

`;
}

module.exports = generateMarkdown;
