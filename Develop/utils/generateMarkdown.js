// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    EPL: '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    WTFPL: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
  };

  return license && license !== 'none' ? licenseBadges[license] || '' : '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: '[MIT](https://opensource.org/licenses/MIT)',
    ISC: '[ISC](https://opensource.org/licenses/ISC)',
    Mozilla: '[MPL 2.0](https://opensource.org/licenses/MPL-2.0)',
    Apache: '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)',
    EPL: '[EPL 1.0](https://opensource.org/licenses/EPL-1.0)',
    WTFPL: '[WTFPL](http://www.wtfpl.net/about/)',
  };

  return license && license !== 'none' ? licenseLinks[license] || '' : '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license && license !== 'none'
    ? `## License
This project is licensed under the ${license} license.

${renderLicenseBadge(license)}

For more information, see the ${renderLicenseLink(license)}.
`
    : '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installationInstructions}
  
  ## Usage
  ${data.usageInformation}
  
  ## Contributing
  ${data.contributionGuidelines}
  
  ## Tests
  ${data.testInstructions}
  
  ## Questions
  GitHub: [${data.gitName}](https://github.com/${data.gitName})
  For any questions, please contact me at ${data.email}.
  ${data.prefCom}
  `;
}

module.exports = generateMarkdown;
