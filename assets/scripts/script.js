// Assignment Code
var generateBtn = document.querySelector("#generate");
var data = {
  length: null,
  lowerCase: null,
  upperCase: null,
  numbers: null,
  specialChar: null,
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword(data);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to run the prompts for password criteria and popup form
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
    data.length = lengthValue;
    openForm();
  } else if (length == null) {
    // Close prompt
  } else {
    alert(
      "Please enter the length of your password in numbers,\nit can be between 8 - 128 inclusive"
    );
    criteriaPrompts();
  }
}
// Event listener to generate button to initiate Criteria prompt and form
generateBtn.addEventListener("click", criteriaPrompts);

// Preventing the form from default submission
const criteriaForm = document.getElementById("form");
criteriaForm.addEventListener("submit", function (event) {
  event.preventDefault();
  getCriteriaFormValues();
  closeForm();
  // TODO: Clear form
  writePassword();
});

// Function to retrieve the radio button inputs on the Criteria form
function getCriteriaFormValues() {
  function getLowerCaseValue() {
    var lowerCaseValue = document.getElementsByName("lowerCase");
    for (var i = 0; i < lowerCaseValue.length; i++) {
      if (lowerCaseValue[i].checked) {
        console.log("Lower case values to be used " + lowerCaseValue[i].value);
        data.lowerCase = lowerCaseValue[i].value === "true";
      }
    }
  }
  function getUpperCaseValue() {
    var upperCaseValue = document.getElementsByName("upperCase");
    for (var i = 0; i < upperCaseValue.length; i++) {
      if (upperCaseValue[i].checked) {
        console.log("Upper case values to be used " + upperCaseValue[i].value);
        data.upperCase = upperCaseValue[i].value === "true";
      }
    }
  }
  function getNumbersValue() {
    var numbersValue = document.getElementsByName("numbers");
    for (var i = 0; i < numbersValue.length; i++) {
      if (numbersValue[i].checked) {
        console.log("Number values to be used " + numbersValue[i].value);
        data.numbers = numbersValue[i].value === "true";
      }
    }
  }
  function getSpecialCharsValue() {
    var specialCharsValue = document.getElementsByName("specialChar");
    for (let i = 0; i < specialCharsValue.length; i++) {
      if (specialCharsValue[i].checked) {
        console.log(
          "Special character values to be used " + specialCharsValue[i].value
        );
        data.specialChar = specialCharsValue[i].value === "true";
      }
    }
  }
  getLowerCaseValue();
  getUpperCaseValue();
  getNumbersValue();
  getSpecialCharsValue();
}

function generatePassword(opts) {
  console.log(opts);
  const lowerCaseCharSet = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberCharSet = "0123456789";
  const specialCharSet = "!@#$%^&*()\\/?<>'\":;[]{}`~|.,-_=+";
  let superSet = "";
  if (opts.lowerCase) {
    superSet += lowerCaseCharSet;
  }
  if (opts.upperCase) {
    superSet += upperCaseCharSet;
  }
  if (opts.numbers) {
    superSet += numberCharSet;
  }
  if (opts.specialChar) {
    superSet += specialCharSet;
  }
  console.log(superSet);
  let output = "";
  for (let i = 0; i < opts.length; i++) {
    output += superSet.charAt(Math.floor(Math.random() * superSet.length));
  }
  return output;
}

// function generatePassword() {
//   var length = 8,
//     charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//     retVal = "";
//   for (var i = 0, n = charset.length; i < length; ++i) {
//     retVal += charset.charAt(Math.floor(Math.random() * n));
//   }
//   return retVal;
// }
