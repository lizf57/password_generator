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

  var length = prompt("Password length must be between 8 and 128 characters long.");
      length = parseInt(length)
      if (length < 8 || length > 128) {
        return "Please choose a password that contains between 8 and 128 characters."
      } else {
        alert("Password length is " + length + " characters long.");
      } 

// character prompts:
    var includeLow = confirm("Do you want to include lowercase characters?");
        if (includeLow) {
          alert("Your password contains lowercase characters.")
          desiredCharacters = desiredCharacters.concat(lowCharacters)
        } 
        else {
          alert("Your password does not contain lowercase characters.")
        }

    var includeUpper = confirm("Do you want to include uppercase characters?");
        if (includeUpper) {
          alert("Your password contains uppercase characters.");
          desiredCharacters = desiredCharacters.concat(upperCharacters)

        }
        else {
          alert("Your password does not contain uppercase characters.");
        }

    includeNumeric = confirm("Do you want to include numeric characters?");
        if (includeNumeric) {
          alert("Your password contains numeric characters.");
          desiredCharacters = desiredCharacters.concat(numericCharacters)

        }
        else {
          alert("Your password does not contain numeric characters.");
        }

    includeSpec = confirm("Do you want to include special characters?");
        if (includeSpec) {
          alert("Your password contains special characters.");
          desiredCharacters = desiredCharacters.concat(specCharacters)

        }
        else {
          alert("Your password does not contain special characters.");
        }

        if (desiredCharacters.length === 0) {
          return 'Select at least one character type'
        }

      var password = ""
     
      for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * desiredCharacters.length);
        password += desiredCharacters[randomIndex]
      }

      return password;

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