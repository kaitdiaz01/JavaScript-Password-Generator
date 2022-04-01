var generateBtn = document.querySelector("#generate");

// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "-",
  "=",
  "+",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "?",
  "/",
  ">",
  "<",
  ".",
  ",",
  "~",
  "|",
];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// need a function to get password selected by user

var passwordLength;

function userSelected() {
  var userChoices = [];
  var noCounter = 0;
  passwordLength = window.prompt(
    "How many characters would you like your password to contain?"
  );
  // error handling for amount of chracters in password
  if (passwordLength >= 8 && passwordLength <= 128) {
    // confirmation for user choices through confirm method
  } else {
    window.alert("Password must be between 8 and 128 characters.");
    userSelected();
  }
  if (window.confirm("Click OK if you want to include special characters.")) {
    userChoices = userChoices.concat(specialChars);
  } else {
    noCounter++;
  }
  if (
    window.confirm(
      "Click OK to confirm if you want to include numeric characters."
    )
  ) {  userChoices = userChoices.concat(numberChars);
  } else {
    noCounter++;
  }
  if (
    window.confirm(
      "Click OK to confirm if you want to include uppercase characters."
    )
  ) {
    userChoices = userChoices.concat(uppercase);
  } else {
    noCounter++;
  }
  if (
    window.confirm(
      "Click OK to confirm if you want to include lowercase characters."
    )
  ) {
    userChoices = userChoices.concat(lowercase);
  } else {
    noCounter++;
  }
  if (noCounter == 4) {
    window.alert("You must choose at least one Character.");
    userSelected();
  }
  console.log(userChoices);
  return userChoices;
}

//Need an array to randomize the elements selected from the user options

function randomSelected() {
  var randomChoice = userSelected();
  console.log(randomChoice);
  var storeRandomLetters = [];

  for (var i = 0; i < passwordLength; i++) {
    //get a random character out of our finshed array
    var randomNum =
      randomChoice[Math.floor(Math.random() * randomChoice.length)];
    storeRandomLetters.push(randomNum);
  }



  var finalPassword = storeRandomLetters.join("");
  console.log(finalPassword);
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = randomSelected();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


