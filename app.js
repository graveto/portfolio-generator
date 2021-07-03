const fs = require("fs");
const generatePage = require("./src/page-template");

const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, githubName] = profileDataArgs;

// Code for demonstration purposes only
// const printProfileData = (profileDataArr) => {
//   for (let i = 0; i < profileDataArr.length; i++) {
//     console.log(profileDataArr[i]);
//   }
//   console.log("===========================");

//   profileDataArr.forEach((element) => {
//     console.log(element);
//   });
// };

// printProfileData(profileDataArgs);
// End demonstration code

fs.writeFile("index.html", generatePage(name, githubName), (err) => {
  if (err) throw new Error(err);
  console.log("Portfolio complete! Check out index.html to see the output!");
});
