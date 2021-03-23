// Assignment Code
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
console.log(lowercase);
console.log(uppercase);
console.log(numbers);
console.log(symbols);

function generateArray(low, high){
  var myArray = [];
  for(var i = low; i <= high; i++){
    myArray.push(i);
  }
  return myArray;
}

//write a function that generates random character from an array
function randomlySelectSingleCharacter(array){
  var i = Math.floor(Math.random() * (array.length));
  
  var randomCharacter = String.fromCharCode(array[i]);

  return randomCharacter;
}

for(var i = 0; i < 100; i++){
  var randomCharacter = randomlySelectSingleCharacter(lowercase);
  console.log("random character generated from lowercase array: ", randomCharacter);
}



// write a function that concatenates the arrays depending on user response


// write a function that generates a random string from appended arrays


// write a function that concatenates the random string to random pasword


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
