// Get the data of a particular user from Github
// Show the parts of the data I want to see (Number of repos)
// Get user to be prompted for which username

const axios = require('axios');
const prompt = require('prompt');

function getGithub(username) {

axios.get(`https://api.github.com/users/${username}`)
  .then(function (response) {
    console.log(response.data["name"]);
    console.log(response.data["location"]);
    console.log(response.data["public_repos"]);
    console.log(response.data["followers"]);
  })
  .catch(function (error) {
    console.log(error);
  });
}

console.log('Welcome to Jamie\'s github checker');
console.log('Please enter a valid Github account username to check:\n');

  prompt.start();
   // Get two properties from the user: username and email
   //
  prompt.get(['username'], function (err, result) {
  console.log('You entered: ' + result.username);
  getGithub(result.username);

});
