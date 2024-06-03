let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID:  2,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 6,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
};

let doggie = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let tardi = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let crew = [superChimpOne, salamander, superChimpTwo, doggie, tardi];
// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.
// function crewReport(arr) {
// for (i=0; i < 5; i++) {
//    let crewMem = crew[i]; {
//       console.log(`${crewMem.name} is a ${crewMem.species}. They are ${crewMem.age} years old and ${crewMem.mass} kilograms. Their ID is ${crewMem.astronautID}.`)
//    }
// }
//    return arr
// }
//   crewReport(crew)
// Start an animal race!

function fitnessTest(crew){
   let results = [], numSteps, turns;
   for(let i = 0; i < crew.length; i++){
      numSteps = 0;
      turns = 0
      while(numSteps < 20){
      numSteps += crew[i].move();
      turns++
      }
      results.push(`${crew[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
}

console.log(fitnessTest(crew))