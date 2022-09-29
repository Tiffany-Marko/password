// 1. assign variables that with hold all possible SPECIAL characters example character: '@', '&', ')' in an ARRAY
//  4 arrays total: special chars, numbers, uppercase letters, and lowercase
var specialChars = [
  "@", // index 0
  "%", // index 1
  "!",
  "#",
  "$",
  "&"
];

var numChars = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
] //i added 3-9

var passwordLength;
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz".split(''); // this is an array
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''); // this is an array too
var masterArray = [];
var generatedPassword = "";

// console.log(uppercaseChar);

// now declare and initalize your lowercase array
// and then your uppercase array
// In the end, we should we working with 4 individual arrays
// that we conditionally combine to form 1 master array,
// epending on the choices/input from the user



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log("My button click works!");
  passwordLength = window.prompt("Please select a password length between 8 and 128 characters.");
  var wantsUppercase = window.confirm("Do you want uppercase letters in your password?");
  var wantsLowercase = window.confirm("Do you want lowercase letters in your password?");
  // var wantsSpecialCharacter = window.confirm("Do you want special characters in your password?");
  // var wantsNumbers = window.confirm("Do you want numbers in your password?");

  if(wantsUppercase) {
    // add uppercase characters to masterArray
    masterArray = masterArray.concat(uppercaseChar);
    // console.log('masterArray now holds', masterArray);
  }

  if(wantsLowercase) {
    // add lowercase characters to masterArray
    masterArray = masterArray.concat(lowercaseChar);
    // console.log('masterArray now holds', masterArray);
  }

  // follow the above pattern for numbers and special characters.
  // after this, you will have an array will all the desired characters
  // the user wants in their password. Now just randomly select a characters
  // from the masterArray, and add it to a string which will hold the partial
  // password. 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// we need another function that creates a password - hint: generatePassword() on line 7
function generatePassword() {
  // any code I want to execute WHEN this generatePassword() function is invoked/executed
  // inside this function, you can randomly select characters from your masterArray,
  // and repeat this selection as many times as the length of the variable passwordLength
  // use a for loop for repeating this random selection of characters
  for (var i = 0; i < passwordLength; i++) {
    // the code you write inside these brackets will
    // be executed mutliples times; i.e. as many times 
    // as the condition i < passwordLength is true
    // you need to figure out how to randomly select a character/item from an array
    // and then add that character to the variable generatedPassword.
    
  }

  // return the generated password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// generateBtn.addEventListener("click", writePassword);
//click tj//
//"if a click happens...then use the writepassword function" tj//