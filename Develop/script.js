// Assignment Code
var generateBtn = document.querySelector("#generate");
var formHolder = document.getElementsByClassName("form-holder");
// might be broken up into additinonal 4 functions
// one function per criteria, then perhaps 
// use switchcase to execute appropriate code block
function generatePassword(){


}

// open new div in html document
// display password criteria
  // length 8 - 125 characters long
  // include lowercase
  // include uppercase
  // include symbols 
function insertCriteriaMenu(){


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
