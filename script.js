// Assignment Code
 var generateBtn = document.querySelector("#generate");

// Constants for character sets
 var LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
 var UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var NUMBER_CHARS = "0123456789";
 var SPECIAL_CHARS = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Write password to the #password input
 function generatePassword() {
   var password = ("");
   var passwordText = document.querySelector("#password");
   var charSet = "";

  // Prompt user for password length
  let length = parseInt(prompt("Enter password length (between 8 and 128 characters):")
  );
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid password length!");
    return;
  }

  // Prompt user for character types
  let includeLowercase = confirm("Include LOWERcase characters?");
    if (includeLowercase) {
    // do something if the user clicked "OK" or "Yes"
    console.log("LOWERcase characters will be included");
  } else {
    // do something else if the user clicked "Cancel" or "No"
    console.log("LOWERcase characters will NOT be included");
  }

    let includeUppercase = confirm("Include UPPERcase characters?");
    if (includeUppercase) {
    // do something if the user clicked "OK" or "Yes"
    console.log("UPPERcase characters will be included");
  } else {
    // do something else if the user clicked "Cancel" or "No"
    console.log("UPPERcase characters will NOT be included");
  }

  let includeNumbers = confirm("Include numbers?");
    if (includeNumbers) {
    // do something if the user clicked "OK" or "Yes"
    console.log("Numbers will be included");
  } else {
    // do something else if the user clicked "Cancel" or "No"
    console.log("Numbers will NOT be included");
  }

  let includeSpecialCharacters = confirm("Include lowercase characters?");
  if (includeSpecialCharacters) {
  // do something if the user clicked "OK" or "Yes"
  console.log("Special characters will be included");
  } else {
  // do something else if the user clicked "Cancel" or "No"
  console.log("Special characters will NOT be included");
  }

  // Build character set from selected types
  if (includeLowercase) charSet += LOWERCASE_CHARS;
  if (includeUppercase) charSet += UPPERCASE_CHARS;
  if (includeNumbers) charSet += NUMBER_CHARS;
  if (includeSpecialCharacters) charSet += SPECIAL_CHARS;

  // Generate password using character set
  for (let i = 0; i < length; i++) {
  let randomIndex = Math.floor(Math.random() * charSet.length);
      password += charSet[randomIndex];
  }

  // Update password textarea
  let passwordTextArea = document.getElementById("password");
  passwordText.value = password;

}

function copyPassword() {
  var password = document.getElementById("password").value;
  navigator.clipboard.writeText(password)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch((error) => {
      console.error("Failed to copy password: ", error);
    });
}

 // Add event listener to generate button
 generateBtn.addEventListener("click", generatePassword);

  // Add event listener to copy button
 document.getElementById("copyBtn").addEventListener("click", copyPassword);


