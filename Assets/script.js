// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// need a function to get password selected by user 

var passwordLength;
 

function userSelected () {
      var userChoices = [];
      var passwordLength = window.prompt ("How many characters would you like your password to contain?")
// error handling for amount of chracters in password
  if (passwordLength >= 8 && passwordLength <= 128) { 
 // confirmation for user choices through confirm method 
  } else { window.alert("Password must be between 8 and 128 characters.");
   return;

  } if (window.confirm ("Click OK if you want to include special characters.")) {
    window.alert("You will have special characters.")); userChoices.concat(specialChars);

  } if (window.confirm ("Click OK to confirm if you want to include numeric characters.")) {
    window.alert("You will have numeric characters."); userChoices.concat(numberChars);
  } if (window.confirm ("Click OK to confirm if you want to include uppercase characters.")) {
    window.alert ("You will have uppercase characters."); userChoices.concat(uppercase);
  } if (window.confirm ("Click OK to confirm if you want to include lowercase characters.")) {
    window.alert("You will have lowercase characters."); userChoices.concat(lowercase);
  }
  // if statement for the user choosing no throughout the selection
   if (
    (window.confirm ("Click OK if you want to include special characters.")) === false &&
    (window.confirm ("Click OK to confirm if you want to include numeric characters.")) === false &&
    (window.confirm ("Click OK to confirm if you want to include uppercase characters.")) === false &&
    (window.confirm ("Click OK to confirm if you want to include lowercase characters.")) === false
    ) { window.alert("You must choose at least one Character."); 
    return;}
    
  
return userChoices;
};


//Need an array to randomize the elements selected from the user options

function randomSelected () {
 var randomChoice = userSelected();
 randomChoice[Math.floor(Math.random()*randomChoice.length)];
 
 for (var i = 0; i < randomChoice.length; i++) {
   var randomNum = randomChoice[i];
   
 }

}

//function to generate the password from user input 
function generatePassword () {
  
  var storePassword = userSelected();
  //create an empty variable to store the concatenated password
  var possibleChar = userSelected();
  // create an empty variable holding all possible password choices
  var pickedChar = userSelected();
  // create an empty variable to hold the chosen characters 

  //error handling to see if the object with your choices exist or not

  //conditional statements are needed to add if the user has chosen special chracters into an array of possible charatcers and must push new random characters to chosen array
  //use concatenate method
  if (userSelected.userchoices == specialChars) {
    possibleChar
  
  }
  
};

// iterate over the password length from the choice made (obj) selecting random indexes from the array of possible characters and outs them into a result variable
// for (var i = 0; i < choice.length; i++) {
//   var possibleChar = getSelection[i];
  
// }
// // ix in at least one of the chosen characters and the result 
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
  //JOIN the results and send them to the writePassword function to present on the page }





// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {

  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






