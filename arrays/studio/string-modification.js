const input = require('readline-sync');
let str = "LaunchCode";
let str2 = ""
let inputstr = input.question("How many letters will be relocated? ")
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.


//Use a template literal to print the original and modified string in a descriptive phrase.
if (inputstr <= str.length) {
    str2 = str.slice(0,inputstr)
    console.log(`I am enjoying ${str.slice(inputstr) + str2} trainging! `)
} else {
    str2 = str.slice(0,3)
    console.log(`That number is too long for ${str.slice(3) + str2}. `)
}
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
