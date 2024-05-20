function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   return reverse(str) === str;
}
let testString = "race car"
console.log(reverse(testString))
console.log(isPalindrome(testString))