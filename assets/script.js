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

  // No characters chosen        

    if (!lowCharacters && !upperCharacters && !numericCharacters && !specCharacters) {
      return "Select at least one character type.";  
    }
    
  // all characters chosen  
    else if (lowCharacters && upperCharacters && numericCharacters && specCharacters) {
    decision =  desiredCharacters.concat(lowCharacters, upperCharacters, numericCharacters, specCharacters);
    }

  // 3 characters chosen:

    if (lowCharacters && upperCharacters && numericCharacters) {
      decision = desiredCharacters.concat(lowCharacters, upperCharacters, numericCharacters);
    }

    if (lowCharacters && upperCharacters && specCharacters) {
      decision = desiredCharacters.concat(lowCharacters, upperCharacters, specCharacters);
    }

    if (lowCharacters && numericCharacters && specCharacters) {
      decision = desiredCharacters.concat(lowCharacters, numericCharacters, specCharacters);
    }
     
    if (upperCharacters && numericCharacters && specCharacters) {
      decision = desiredCharacters.concat(upperCharacters, numericCharacters, specCharacters);
    }

  // 2 characters chosen:

    if (lowCharacters && upperCharacters) {
      decision = desiredCharacters.concat(lowCharacters, upperCharacters);
    }

    if (lowCharacters && numericCharacters) {
      decision = desiredCharacters.concat(lowCharacters, numericCharacters);
    }

    if (lowCharacters && specCharacters) {
      decision = desiredCharacters.concat(lowCharacters, specCharacters);
    }

    if (upperCharacters && numericCharacters) {
      decision = desiredCharacters.concat(upperCharacters, numericCharacters);
    }

    if (upperCharacters && specCharacters) {
      decision = desiredCharacters.concat(upperCharacters, specCharacters);
    }

    if (numericCharacters && specCharacters) {
      decision = desiredCharacters.concat(numericCharacters, specCharacters);
    }

  // 1 character chosen:

    if (upperCharacters) {
      decision = desiredCharacters.concat(upperCharacters);
    }
     if (numericCharacters) {
      decision = desiredCharacters.concat(numericCharacters);
     }

     if (specCharacters) {
      decision = desiredCharacters.concat(specCharacters);
     };
    }
  // random generator   


  function getRandomPassword(){
     var password 
     
     for (var i = 0; i < length; i++) {
 
     var decision = [Math.floor(Math.random() * desiredCharacters.length)];
       // password.push(decision);

       password = desiredCharacters[decision]
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
