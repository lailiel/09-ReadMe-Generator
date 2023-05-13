// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == true) 
  return "[!(https://img.shields.io/badge/license-${license}-blue)]"
  else return ""
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license == 'MIT')
   return "https://opensource.org/license/mit/"
  else if (license == 'APACHE 2.0')
   return "https://opensource.org/license/apache-2-0/"
  else if (license == 'GPL 3.0')
   return "https://opensource.org/license/gpl-3-0/"
  else if (license == 'BSD 3')
   return "https://opensource.org/license/bsd-3-clause/"
  else return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 const badge = renderLicenseBadge()
 const link = renderLicenseLink()
  if (license == true)
   return "Project is licensed under ${badge}(${link})"
  else 
   return ""
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {github, email, project, description, install, usage, license, contribution, test} = data
  const licenseSec = renderLicenseSection(license)
  return `## ${project}

  ${description}
  
## Table of Contents

  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contribution](#contribution)
  5. [Testing](#testing)

## Installation

  ${install}

## Usage

  ${usage}

## License

  ${licenseSec}

## Contribution

  ${contribution}

## Testing

  ${test}

## Contacts
  Email me at [${email}](mailto:${email}) or explore more projects at[${github}](https://www.github.com/${github})
`;
}

module.exports = generateMarkdown;
