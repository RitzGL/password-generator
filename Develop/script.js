// select the buttom element
var generateBtn = document.querySelector("#generate");

// generate 4 different arrays, with the ASCII codes for each criteria
var lowercase = generateArray(97,122);
var uppercase = generateArray(65,90);
var numbers = generateArray(48,57);
var symbols = generateArray(33, 47).concat(
  generateArray(58,64)
).concat(
  generateArray(91,96)
).concat(
  generateArray(123,126)
);

// empty array - will be concatenated with one or more of the default arrays
var passwordCharacterSelector = [];

// generate the default arrays
// returns an array with ASCII codes within the 'low' and 'range'
function generateArray(low, high){

  var myArray = [];

  for(var i = low; i <= high; i++){

    myArray.push(i);

  }
  
  return myArray;
}

// randomly select single character from an array
// returns character
function randomlySelectSingleCharacter(array){

  var i = Math.floor(Math.random() * array.length);
  
  var randomCharacter = String.fromCharCode(array[i]);

  return randomCharacter;
}

// get a random number
// returns number
function getRandomInt(length){
  var i = Math.floor(Math.random() * length);
  return i;
}

// get criteria for password generation from the user
// return an array of booleans of the selected criteria
function getUserCriteria(){
  var includeLowercase = confirm("Include lowercase characters? OK: Yes Cancel: No");
  var includeUppercase = confirm("Include uppercase characters? OK: Yes Cancel: No");
  var includeNumbers = confirm("Include number characters? OK: Yes Cancel: No");
  var includeSymbols = confirm("Include symbol characters? OK: Yes Cancel: No");
  var criteriaArray = [includeLowercase, includeUppercase, includeNumbers, includeSymbols];
  return criteriaArray;
}

// array is concatenated depending on user criteria
// returns array from which password will be selected
function concatenateArrays(userCriteria){
  var array = [];
  
  if(userCriteria[0]){
    array = array.concat(lowercase);
  }

  if(userCriteria[1]){
    array = array.concat(uppercase);
  }

  if(userCriteria[2]){
    array = array.concat(numbers);
  }

  if(userCriteria[3]){
    array = array.concat(symbols);
  }

  return array;
}

// get the length of the password, reload page if length is null or out of range
// returns a number as text
function getPasswordLength(){
  var passwordLength = prompt("Enter how many characters in password (8-128)");

  if(passwordLength === null 
    || passwordLength < 8 
    || passwordLength > 128){
    alert("Password must be an integer between 8 and 128 characters!");
    alert("Password will be empty, please reload page");
    // document.location.reload();
  }else{
    return passwordLength;
  }
}

// ensure at least one of selected character types is selected
// returns an array of characters
function validatePasswordCriteria(userCriteria){
  
  var criteriaString = '';
  if(userCriteria[0]){
    var lowercaseChar = randomlySelectSingleCharacter(lowercase);
    criteriaString = criteriaString + lowercaseChar;
  }

  if(userCriteria[1]){
    var uppercaseChar = randomlySelectSingleCharacter(uppercase);
    criteriaString = criteriaString + uppercaseChar;
  }

  if(userCriteria[2]){
    var numberChar = randomlySelectSingleCharacter(numbers);
    criteriaString = criteriaString + numberChar;
  }

  if(userCriteria[3]){
    var symbolChar = randomlySelectSingleCharacter(symbols);
    criteriaString = criteriaString + symbolChar;
  }
  var stringArray = criteriaString.split("");
  return stringArray;
}

// write a function that generates a random string from appended arrays
// returns string from randonly selected characters
// invokes all other methods
function generatePassword(){

  var password = [];
  
  // get the length of the password from the user
  var passwordLength = getPasswordLength();
  
  var userCriteria = getUserCriteria();

  // generate the array from which the password will be generated 
  passwordCharacterSelector = concatenateArrays(userCriteria);
 
  // ensure that at least one of each type is inserted 
  var insertedString = validatePasswordCriteria(userCriteria);
  
  for(let i = 0; i < passwordLength; i++){

    password[i] = randomlySelectSingleCharacter(passwordCharacterSelector);

  }

  // this only iterates through 3 times, unable to find bug
  for(let i = 0; i < insertedString.length; i++){

    var j = getRandomInt(password.length);
    password[j] = insertedString[i];

  }

  return password;
}

// Write password to the #password input
function writePassword() {
  
  var passwordArray = generatePassword();
  var password =  passwordArray.join("");
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
