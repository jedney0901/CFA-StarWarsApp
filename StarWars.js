const axios = require('axios');
const prompt = require('prompt');

let person;
let planet;
let species;

function starWars() {

axios.get('http://swapi.co/api/people/')
  .then(function (response) {
    const id = Math.floor((Math.random() * response.data.count) + 1);
    console.log(response)
    return axios.get(`http://swapi.co/api/people/${id}`)
  })
  .then(function (response) {
    person = response.data;
    console.log(response)
    return axios.get(`http://swapi.co/api/planets`)
  })
  .then(function (response) {
    const planet_id = Math.floor((Math.random() * response.data.count) + 1);
  return axios.get(`http://swapi.co/api/planets/${planet_id}`)
  })
  .then(function (response) {
     planet = response.data;
  return axios.get(`http://swapi.co/api/species`)
  })
  .then(function (response) {
    const species_id = Math.floor((Math.random() * response.data.count) + 1);
    return axios.get(`http://swapi.co/api/species/${species_id}`)
  })
  .then(function (response) {
    species = response.data

    console.log('Wecome to the Star Wars Random Story Generator. The idea behind this is to provide you a random spinoff story line that you can then go and sell off to Disney and help them make billions of dollars! Keep running the app and you will be given a different set of characters, planets and species for your story that have previously appeared in all of the Star Wars movies.')

    console.log(`War! The Republic is crumbling under attacks by the ruthless Dark Servant, ${species.name}. There are heroes on both sides. Evil is everywhere.
    In a stunning move, the forever deadly ${person.name}, has attacked the capital and kidnapped his half son Donja, a jedi prodigy and the last hope of the galaxy. He hopes to take him to the ${planet.name}, the last sith stronghold and to convert him into a servant for the emperor. As random Army attempts to flee the capital with their valuable hostage, two Jedi Knights lead a desperate mission to save the boy from the darkside....`)
  })
  .catch(function (error) {
    console.log(error);
  });
}

starWars()
