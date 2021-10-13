
const fs = require('fs');
const { parse } = require('path');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var licenseType;
var licenseWebsite;
var readmebody;
var licenseSection;
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      licenseType = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      licenseWebsite = "(https://opensource.org/licenses/MIT)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    case "Apache":
      licenseType = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      licenseWebsite = "(https://opensource.org/licenses/Apache-2.0)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    case "Boost":
      licenseType = "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
      licenseWebsite = "(https://www.boost.org/LICENSE_1_0.txt)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    case "BSD 3-Clause License":
      licenseType = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
      licenseWebsite = "(https://opensource.org/licenses/BSD-3-Clause)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseType = "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)";
      licenseWebsite = "(http://creativecommons.org/publicdomain/zero/1.0/)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;

    case "Eclipse":
      licenseType = "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)";
      licenseWebsite = "(https://opensource.org/licenses/EPL-1.0)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    case "GNU GPL v3":
      licenseType = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      licenseWebsite = "(https://www.gnu.org/licenses/gpl-3.0)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    case "IBM Public License Version 1.0":
      licenseType = "![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)";
      licenseWebsite = "(https://opensource.org/licenses/IPL-1.0)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    case "ISC":
      licenseType = "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
      licenseWebsite = "(https://opensource.org/licenses/ISC)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    case "Mozilla Public License 2.0":
      licenseType = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
      licenseWebsite = "(https://opensource.org/licenses/MPL-2.0)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    case "The Perl License":
      licenseType = "![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)";
      licenseWebsite = "(https://opensource.org/licenses/Artistic-2.0)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    case "SIL Open Font License 1.1":
      licenseType = "![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)";
      licenseWebsite = "(https://opensource.org/licenses/OFL-1.1)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    default:
      licenseType = "";
      licenseWebsite = "";
      console.log(licenseType);
      console.log(licenseWebsite);
      
  }
  // renderLicenseLink(licenseWebsite);
  // renderLicenseSection(licenseType);
  console.log("link " + licenseWebsite)
  console.log("image " + licenseType)
  fs.appendFile('README.md', licenseType, (err) =>
  err ? console.error(err) : console.log('Success Added Image!')
);
  //return licenseType, licenseWebsite;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  switch (data) {
    case "MIT":
      licenseType = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      licenseWebsite = "(https://opensource.org/licenses/MIT)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    case "Apache":
      licenseType = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      licenseWebsite = "(https://opensource.org/licenses/Apache-2.0)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    case "Boost":
      licenseType = "![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)";
      licenseWebsite = "(https://www.boost.org/LICENSE_1_0.txt)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    case "BSD 3-Clause License":
      licenseType = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
      licenseWebsite = "(https://opensource.org/licenses/BSD-3-Clause)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseType = "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)";
      licenseWebsite = "(http://creativecommons.org/publicdomain/zero/1.0/)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;

    case "Eclipse":
      licenseType = "![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)";
      licenseWebsite = "(https://opensource.org/licenses/EPL-1.0)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    case "GNU GPL v3":
      licenseType = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      licenseWebsite = "(https://www.gnu.org/licenses/gpl-3.0)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    case "IBM Public License Version 1.0":
      licenseType = "![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)";
      licenseWebsite = "(https://opensource.org/licenses/IPL-1.0)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    case "ISC":
      licenseType = "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
      licenseWebsite = "(https://opensource.org/licenses/ISC)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    case "Mozilla Public License 2.0":
      licenseType = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
      licenseWebsite = "(https://opensource.org/licenses/MPL-2.0)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    case "The Perl License":
      licenseType = "![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)";
      licenseWebsite = "(https://opensource.org/licenses/Artistic-2.0)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    case "SIL Open Font License 1.1":
      licenseType = "![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)";
      licenseWebsite = "(https://opensource.org/licenses/OFL-1.1)";
      console.log(licenseType);
      console.log(licenseWebsite);
      break;
    default:
      licenseType = "";
      licenseWebsite = "";
      console.log(licenseType);
      console.log(licenseWebsite);
      
  }
  // renderLicenseLink(licenseWebsite);
  // renderLicenseSection(licenseType);
  var licenseName = "[" + data + "]"
  console.log("link append bottom " + licenseWebsite)
  console.log("image append bottom " + licenseType)
  console.log("image append bottom " + licenseName)
  var lists=`
  ### License:
  ${licenseName}${licenseWebsite}
  
`;
//var lists = JSON.stringify(list);
console.log(lists);

  fs.appendFile('README.md', `${lists}`, (err) =>
  err ? console.error(err) : console.log('Success Added Link!')
);
  //return licenseType, licenseWebsite;

  return;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection() {
  licenseSection = "## License Section  "
  fs.appendFile('README.md', licenseSection, (err) =>
  err ? console.error(err) : console.log('Success Section!')
);
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title},
//       ## ${data.description},
//       ## ${data.installation},
//       ## ${data.usage},
//       ## ${data.contributing},
//       ## ${data.tests},
//       ## "This is the git username "${data.gitUserName},
//       ## "This is the email."${data.email}
//       ## ${licenseSection},

// `;
// }
function generateMarkdown(data) {
  //console.log(`data ${data}`);
  //JSON.parse(data);
  //console.log(data)
  console.log(`${data.title}`)
  var lists=`
  # ${data.title}
  ### Description:
  ${data.description}
  ### Installation:
  ${data.installation}
  ### Usage: 
  ${data.usage}
  ### Contributions:
  ${data.contributing}
  ### Tests
  ${data.tests}
  ### Contact
  If you have any questions, suggestions or concerns, please contact me at:  
  GitHub  
  ${data.gitUserName}  
  email  
  ${data.email}  
`;
//var lists = JSON.stringify(list);
console.log(lists);
return lists;
}
module.exports.renderLicenseBadge = renderLicenseBadge;
module.exports.generateMarkdown = generateMarkdown;
module.exports.renderLicenseLink = renderLicenseLink;
// renderLicenseBadge(data);
// renderLicenseSection();
//renderLicenseLink(licenseWebsite);