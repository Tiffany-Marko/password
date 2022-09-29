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
  var wantsSymbols = window.confirm("Do you want speacial characters in your password?");
  var wantsNumbers = window.confirm("Do you want numbers in your password?");
  // var wantsNumbers (etc) = window.confirm("Do you want numbers in your password?");

//user confirms all character types
  if(wantsUppercase && wantsLowercase && wantsSymbols && wantsNumbers ) {
   
    masterArray = masterArray.concat(uppercaseChar, lowercaseChar, specialChars, numChars);
     console.log('masterArray now holds', masterArray);
     generatePassword(passwordLength)
    
  }
  //user excludes uppercase
  if(!wantsUppercase && wantsLowercase && wantsSymbols && wantsNumbers) {
    masterArray.concat(lowercaseChar, specialChars, numChars);
  } 
  //user excludes lowercase AND lowercase
  if(!wantsUppercase && !wantsLowercase && wantsSymbols && wantsNumbers) {
    masterArray.concat(specialChars, numChars);
  }
  //user excludes special chars
  if(wantsUppercase && wantsLowercase && !wantsSymbols && wantsNumbers) {
    masterArray.concat(lowercaseChar, numChars, uppercaseChar);
  }
//exclude numbers
if(wantsUppercase && wantsLowercase && wantsSymbols && !wantsNumbers) {
  masterArray.concat(lowercaseChar, specialChars, uppercaseChar);
}
//excludes number and special chars
if(wantsUppercase && wantsLowercase && !wantsSymbols && !wantsNumbers) {
  masterArray.concat(lowercaseChar, uppercaseChar);
}
//confirm only numbers
if(!wantsUppercase && !wantsLowercase && !wantsSymbols && wantsNumbers) {
  masterArray.concat(wantsNumbers);
}
//confirms only lowercase

if(!wantsUppercase && wantsLowercase && wantsSymbols && wantsNumbers) {
  masterArray.concat(lowercaseChar, specialChars, numChars);
}
  if(wantsLowercase) {
    // add lowercase characters to masterArray
    masterArray = masterArray.concat(lowercaseChar);
    // console.log('masterArray now holds', masterArray);
    console.log(masterArray); 
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
function generatePassword(length) {
  // any code I want to execute WHEN this generatePassword() function is invoked/executed
  // inside this function, you can randomly select characters from your masterArray,
  // and repeat this selection as many times as the length of the variable passwordLength
  // use a for loop for repeating this random selection of characters
  var result = ""
  for (var i = 0; i <length; i++) {
    result += masterArray.charAt(Math.floor(Math.random() * masterArray.length));
    // the code you write inside these brackets will
    // be executed mutliples times; i.e. as many times 
    // as the condition i < passwordLength is true
    // you need to figure out how to randomly select a character/item from an array
    // and then add that character to the variable generatedPassword.
    
  } 
  document.querySelector("#password").innerHTML=result
  return 

  // return the generated password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// generateBtn.addEventListener("click", writePassword);
//click tj//
//"if a click happens...then use the writepassword function" tj//