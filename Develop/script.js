// Assignment code here

function generatePassword(){

// variable:

  var lowCharacters = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]; 

  var upperCharacters = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z"]; 

  var numericCharacters = ["0" , "1" , "2" , "3" , "4", "5" , "6" , "7" , "8" , "9"];

  var specCharacters = ["!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "/" , "?"];

  var desiredCharacters = []

  var decision; 

// password length

  length = prompt("Password length must be between 8 and 128 characters long.");
      length = parseInt(length)
      if (length < 8 || length > 128) {
        return "Please choose a password that contains between 8 and 128 characters."
      } else {
        alert("Password length is " + length + " characters long.");
      } 

// character prompts:
    lowCharacters = confirm("Do you want to include lowercase characters?");
        if (lowCharacters) {
          alert("Your password contains lowercase characters.")
        }
        else {
          alert("Your password does not contain lowercase characters.")
        }

    upperCharacters = confirm("Do you want to include uppercase characters?");
        if (upperCharacters) {
          alert("Your password contains uppercase characters.");
        }
        else {
          alert("Your password does not contain uppercase characters.");
        }

    numericCharacters = confirm("Do you want to include numeric characters?");
        if (numericCharacters) {
          alert("Your password contains numeric characters.");
        }
        else {
          alert("Your password does not contain numeric characters.");
        }

    specCharacters = confirm("Do you want to include special characters?");
        if (specCharacters) {
          alert("Your password contains special characters.");
        }
        else {
          alert("Your password does not contain special characters.");
        }





  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
