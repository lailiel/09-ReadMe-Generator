function renderLicenseBadge(license) {
  if (license == "None") return "";
  else
    return `![${license}](https://img.shields.io/badge/license-${license}-blue)`;
}

function renderLicenseLink(license) {
  if (license == "MIT") return "https://opensource.org/license/mit/";
  else if (license == "APACHE 2.0")
    return "https://opensource.org/license/apache-2-0/";
  else if (license == "GPL 3.0")
    return "https://opensource.org/license/gpl-3-0/";
  else if (license == "BSD 3")
    return "https://opensource.org/license/bsd-3-clause/";
  else return "";
}

function renderLicenseSection(license) {
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  if (license == "None") return "None";
  else
    return `${badge}
   \nProject is licensed under ${license}
   \nRead more on [this page](${link})`;
}

function generateMarkdown(data) {
  const {
    github,
    email,
    project,
    description,
    install,
    usage,
    license,
    contribution,
    test,
  } = data;
  const licenseSec = renderLicenseSection(license);
  return `# ${project}

## Description

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

## Questions
  Email me at [${email}](mailto:${email}) or explore more projects at [${github}](https://www.github.com/${github})
`;
}

module.exports = generateMarkdown;
