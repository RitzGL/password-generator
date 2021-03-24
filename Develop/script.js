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

//randomly select single character from an array
// returns character
function randomlySelectSingleCharacter(array){

  var i = Math.floor(Math.random() * array.length);
  
  var randomCharacter = String.fromCharCode(array[i]);

  return randomCharacter;
}

// confirm boxes concatenates arrays based on user response
// returns array from which password will be selected
function concatenateArrays(){
  var array = [];
  
  if(confirm("Include lowercase characters? OK: Yes Cancel: No")){
    array = array.concat(lowercase);
  }

  if(confirm("Include uppercase characters? OK: Yes Cancel: No")){
    array = array.concat(uppercase);
  }

  if(confirm("Include number characters? OK: Yes Cancel: No")){
    array = array.concat(numbers);
  }

  if(confirm("Include symbol characters? OK: Yes Cancel: No")){
    array = array.concat(symbols);
  }

  return array;
}

// get the length of the password, reload page if length is null or out of range
// returns a number as text
function getPasswordLength(){
  var passwordLength = prompt("Enter how many characters in password (8-128)"
  ,"8")

  if(passwordLength === null || passwordLength < 8 || passwordLength > 128){
    alert("Password must be between 8 and 128 characters!");
    document.location.reload();
  }else{
    return passwordLength;
  }

}

// write a function that generates a random string from appended arrays
// returns string from randonly selected characters
// invokes all other methods
function generatePassword(){
  var password = [];
  
  // get the length of the password from the user
  var passwordLength = getPasswordLength();
  console.log("length of password: ", passwordLength);
  
  // generate the array from which the password will be generated 
  passwordCharacterSelector = concatenateArrays();
  console.log("array from which password will be generated ", 
  passwordCharacterSelector);


  // for(let i = 0; i < passwordLength; i++){
    

  // }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
