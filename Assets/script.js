// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// need a function to get password selected by user 



function userSelected () {
      var userInput = ()

  if (window.prompt ("How many characters would you like your password to contain?")) && userInput < 8 && passwordLength > 128) {
      window.alert("Password must be between 8 and 128 characters.")
 
  } else if (userInput == specialChars) {
    window.confirm ("Click OK if you want to include special characters.");
  
  } else if (userInput == numberChars) {
    window.confirm ("Click OK to confirm if you want to include numeric characters.");
    
  } else if (userInput == uppercase) {
    window.confirm ("Click OK to confirm if you want to include uppercase characters.");

  } else if (userInput == lowercase) {
    window.confirm ("Click OK to confirm if you want to include lower`case characters.")
    
  }
  if (
    userInput !== specialChars ||
    userInput !== numberChars ||
    userInput !== uppercase ||
    userInput !== lowercase
    ) {
      window.alert ("You must choose at least one Character.")
    
  } 
  var choices = 
};
// error handling for amount of chracters in password
// confirmation for user choices through confirm method 
// if statement for the user choosing no throughout the selection
// object to store all the user choices
//return the object

//Need an array to randomize the elements selected from the user options
var Randomchoice = []

function randomSelected (choice) {
  // use math.floor to select random choice within the choice array
  // choose random characters in the array
  // return the random element 
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

  //conditional statements are needed to add if the user has chosen special chracters into an array of possible charatcers and must push neww random characters to chosen array
  //use concatenate method
  if () {
  
  }
  
};

// iterate over the password length from the choice made (obj) selecting random indexes from the array of possible characters and outs them into a result variable
for (var i = 0; i < choice.length; i++) {
  var possibleChar = getSelection[i];
  
}
// ix in at least one of the chosen characters and the result 
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
  //JOIN the results and send them to the writePassword function to present on the page

}



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






