const spongebobCharacters = [
    {
      name: "SpongeBob SquarePants",
      species: "Sea Sponge",
      occupation: "Fry Cook",
      favoriteActivity: "Jellyfishing",
      friendGroup: "Main Characters",
    },
    {
      name: "Patrick Star",
      species: "Starfish",
      occupation: "Unemployed",
      favoriteActivity: "Eating and sleeping",
      friendGroup: "Main Characters",
    },
    {
      name: "Squidward Tentacles",
      species: "Octopus",
      occupation: "Cashier",
      favoriteActivity: "Playing the clarinet",
      friendGroup: "Main Characters",
    },
    {
      name: "Mr. Krabs",
      species: "Crab",
      occupation: "Restaurant Owner",
      favoriteActivity: "Counting money",
      friendGroup: "Bikini Bottom Business Owners",
    },
    {
      name: "Sandy Cheeks",
      species: "Squirrel",
      occupation: "Scientist/Inventor",
      favoriteActivity: "Karate and science experiments",
      friendGroup: "Main Characters",
    },
    {
      name: "Plankton",
      species: "Plankton",
      occupation: "Restaurant Owner",
      favoriteActivity: "Stealing the Krabby Patty formula",
      friendGroup: "Bikini Bottom Business Owners",
    },
    {
      name: "Mrs. Puff",
      species: "Pufferfish",
      occupation: "Boating School Instructor",
      favoriteActivity: "Teaching and avoiding SpongeBob",
      friendGroup: "Educators",
    },
    {
      name: "Gary the Snail",
      species: "Snail",
      occupation: "Pet",
      favoriteActivity: "Meowing and eating",
      friendGroup: "Main Characters",
    },
    {
      name: "Larry the Lobster",
      species: "Lobster",
      occupation: "Lifeguard",
      favoriteActivity: "Weightlifting and staying fit",
      friendGroup: "Sports and Fitness Enthusiasts",
    },
    {
      name: "Karen Plankton",
      species: "Computer",
      occupation: "Plankton's Wife/Assistant",
      favoriteActivity: "Calculating and assisting Plankton",
      friendGroup: "Bikini Bottom Business Owners",
    },
    {
      name: "Pearl Krabs",
      species: "Whale",
      occupation: "Student",
      favoriteActivity: "Shopping and hanging out with friends",
      friendGroup: "Teenagers of Bikini Bottom",
    },
    {
      name: "Mermaid Man",
      species: "Human",
      occupation: "Retired Superhero",
      favoriteActivity: "Fighting crime",
      friendGroup: "Superheroes",
    },
    {
      name: "Barnacle Boy",
      species: "Human",
      occupation: "Retired Superhero Sidekick",
      favoriteActivity: "Being grumpy",
      friendGroup: "Superheroes",
    },
    {
      name: "Flying Dutchman",
      species: "Ghost",
      occupation: "Ghostly Pirate",
      favoriteActivity: "Scaring people and collecting souls",
      friendGroup: "Otherworldly Characters",
    },
    {
      name: "Bubble Buddy",
      species: "Bubble",
      occupation: "Friend of SpongeBob",
      favoriteActivity: "Floating around and having fun",
      friendGroup: "Main Characters",
    },
  ];
//were grabbing the entire element and storing it into a messageDiv
//const messageDiv = document.getElementById("bob")

//const messageDiv = document.querySelector("#bob")
//console.log(messageDiv)
//messageDiv.innerText = "cook"
const tableBody = document.querySelector(".tableBody");

for (character of spongebobCharacters){
  //making a row.

const row =  document.createElement("tr");
//making a single item.

const datacell = document.createElement("td")
//giving the item a character name.

datacell.innerText = character.name
//put the item into the row

row.appendChild(datacell) 
//put the row into the body
const species = document.createElement("td")
species.innerText = character.species
row.appendChild(species)
tableBody.appendChild(row)



}








