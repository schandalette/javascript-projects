// Declare and assign the variables below
let nameSpaceShuttle = "Determination";
let speedShuttleMph = 17500;
let distanceMarsKm = 225000000;
let distanceMoonKm = 384400;
let milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof nameSpaceShuttle);
console.log(typeof speedShuttleMph);
console.log(typeof distanceMarsKm);
console.log(typeof distanceMoonKm);
console.log(typeof milesPerKm);
// Calculate a space mission below
let milesToMars = distanceMarsKm * milesPerKm;
let hoursToMars = milesToMars / speedShuttleMph;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(nameSpaceShuttle + " will take " + daysToMars + " days to reach Mars.")
// Calculate a trip to the moon below
let milesToMoon = distanceMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / speedShuttleMph;
let daysToMoon = hoursToMoon / 24;
// Print the results of the trip to the moon below
console.log(nameSpaceShuttle + " will take " + daysToMoon + " days to reach the Moon.")