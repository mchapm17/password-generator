var generateBtn = document.querySelector("#generate");
function generatePassword() {
var characters = prompt("Please enter a password with at least 8 characters,but no more than 128 characters.");
var totalCharacters = parseInt(characters);
console.log(totalCharacters);
if (totalCharacters >= 8 && totalCharacters <= 128) {
  var newPassword = [];
  var possibleCharacters =[];
  var insurance = [];
  var letters = "abcdefghijklmnopqrstuvwxyz".split('');
  var hasLowercase = confirm("Add lowercase letters");

  if (hasLowercase) {
    var random = Math.floor(Math.random() * letters.length);
    var letter = letters[random];
    console.log(letters);
    possibleCharacters = possibleCharacters.concat(letters);
    totalCharacters -= 1;
  }

  for (var i = 0; i < totalCharacters; i++){
    var random = Math.floor(Math.random() * possibleCharacters.length)
    console.log(random);
    newPassword.push(possibleCharacters[random]);
  }

  const returnValue = insurance.concat(newPassword);

  return returnValue.join('');
} else {
  console.log("No Good");
  alert("hey, we only allow 8 to 128 characters, try again.")
  generatePassword();
}
  return "";
}

function writePassword() {  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
