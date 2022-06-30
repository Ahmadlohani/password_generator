// Assignment Code
var generateBtn = document.querySelector("#generate");

function createPassword(type, length) {
  var pswd = "";
  for (var i = 0; i <= length; i++) {
    var randomNumber = Math.floor(Math.random() * type.length);
    pswd += type.substring(randomNumber, randomNumber + 1);
  }
  return pswd;
}
function generatePassword() {
  var len = prompt("Length of Password?");
  while (len < 8 || len > 128) {
    alert("Password must be atleast 8 and atmost 128 charcaters long");
    len = prompt("Length of Password?");
  }
  var uppercase = prompt("Include Uppercase (0 or 1)");
  while (!(uppercase == 0 || uppercase == 1)) {
    alert("Answer must be 0 or 1");
    uppercase = prompt("Include Uppercase (0 or 1)");
  }
  var lowercase = prompt("Include Lowercase (0 or 1)");
  while (!(lowercase == 0 || lowercase == 1)) {
    alert("Answer must be 0 or 1");
    lowercase = prompt("Include Lowercase (0 or 1)");
  }    
  var numeric = prompt("Include Numeric (0 or 1)");
  while (!(numeric == 0 || numeric == 1)) {
    alert("Answer must be 0 or 1");
    numeric = prompt("Include Numeric (0 or 1)");
  }    
  var special = prompt("Include Special Charcaters (0 or 1)");
  while (!(special == 0 || special == 1)) {
    alert("Answer must be 0 or 1");
    special = prompt("Include Special Charcaters (0 or 1)");
  }
  var totalPass = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()"abcdefghijklmnopqrstuvwxyz';
  var numPass = "0123456789";
  var upperPass = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerPass = "abcdefghijklmnopqrstuvwxyz";
  var specialPass = '!@#$%^&*()"';
  var passwordLength = len-1;
  var password = "";
  password = createPassword(upperPass, passwordLength);
  // password = createPassword(specialPass, passwordLength);
  if (uppercase == 1 && lowercase == 0 && numeric == 0 && special == 0) password = createPassword(upperPass, passwordLength);
  if (uppercase == 0 && lowercase == 1 && numeric == 0 && special == 0) password = createPassword(lowerPass, passwordLength);  
  if (uppercase == 0 && lowercase == 0 && numeric == 1 && special == 0) password = createPassword(numPass, passwordLength);  
  if (uppercase == 0 && lowercase == 0 && numeric == 0 && special == 1) password = createPassword(specialPass, passwordLength);
  if (uppercase == 1 && lowercase == 1 && numeric == 0 && special == 0) password = createPassword((upperPass+lowerPass), passwordLength);  
  if (uppercase == 1 && lowercase == 0 && numeric == 1 && special == 0) password = createPassword((upperPass+numPass), passwordLength);  
  if (uppercase == 1 && lowercase == 0 && numeric == 0 && special == 1) password = createPassword((upperPass+specialPass), passwordLength);  
  if (uppercase == 0 && lowercase == 1 && numeric == 1 && special == 0) password = createPassword((lowerPass+numPass), passwordLength);
  if (uppercase == 0 && lowercase == 1 && numeric == 0 && special == 1) password = createPassword((lowerPass+specialPass), passwordLength);
  if (uppercase == 0 && lowercase == 0 && numeric == 1 && special == 1) password = createPassword((numPass+specialPass), passwordLength);
  if (uppercase == 1 && lowercase == 1 && numeric == 1 && special == 0) password = createPassword((numPass+upperPass+lowerPass), passwordLength);
  if (uppercase == 0 && lowercase == 1 && numeric == 1 && special == 1) password = createPassword((numPass+specialPass+lowerPass), passwordLength);
  if (uppercase == 0 && lowercase == 0 && numeric == 0 && special == 0) password = createPassword((totalPass), passwordLength);
  if (uppercase == 1 && lowercase == 1 && numeric == 1 && special == 1) password = createPassword((totalPass), passwordLength);
  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
