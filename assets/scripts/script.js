// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

//function to run the prompts for password criteria and popup form
function openForm() {
  document.getElementById("criteriaForm").style.display = "block";
}
function closeForm() {
  document.getElementById("criteriaForm").style.display = "none";
}

function criteriaPrompts() {
  var length = prompt(
    "How long would you like the password?\n(between 8 and 128 characters)",
    ""
  );
  let lengthValue = parseInt(length);
  console.log(length, lengthValue);

  if (lengthValue >= 8 && lengthValue <= 128) {
    openForm();
  } else {
    alert(
      "Please enter the length of your password in numbers,\nit can be between 8 - 128 inclusive"
    );
    criteriaPrompts();
  }
}

generateBtn.addEventListener("click", criteriaPrompts);

// Add an if statement - if >=1 radio button && length selected then generate password
//generateBtn.addEventListener("click", writePassword);
