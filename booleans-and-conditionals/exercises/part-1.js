// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
let fuelLevel = 20001;
let engineTemperature = 2700;
let commandOverride = false;

// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}
if (crewStatus) {
   console.log("Crew Ready");
} else {
   console.log("Crew Not Ready")
}
if (computerStatusCode === 200) {
   console.log("Please stand by. Computer is rebooting."); 
}  else if (computerStatusCode === 400) {
   console.log("Success! Computer online.");
}  else {
   console.log("Crew Not Ready");
}
if (shuttleSpeed > 17500) {
   console.log("ALERT: Escape velocity reached!");
}  else if (shuttleSpeed < 8000) {
   console.log("ALERT: Cannot maintain orbit!");
}  else {
   console.log("Stable spead");
}
if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
   console.log("WARNING. Not ready");
} else {
   console.log("all systems go");
}
if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking"){
   console.log("ENGINE FAILURE IMMINENT!");
 } else if (fuelLevel <= 5000 || engineTemperature > 2500){
   console.log("Check fuel level. Engines running hot.");
 } else if (fuelLevel > 20000 && engineTemperature <= 2500){
   console.log("Full tank. Engines good.");
 } else if (fuelLevel > 10000 && engineTemperature <= 2500){
   console.log("Fuel level above 50%. Engines good.");
 } else if (fuelLevel > 5000 && engineTemperature <= 2500){
   console.log("Fuel level above 25%. Engines good.");
 } else {
   console.log("Fuel and engine status pending...");
 }
if ((fuelLevel > 20000) && (engineIndicatorLight !== "red blinking") || (commandOverride)) {
   console.log("Cleared to Launch!");
}  else {
   console.log("Launch scrubbed!");
}