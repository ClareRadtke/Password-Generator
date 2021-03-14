// Assignment Code
const generateBtn = document.querySelector("#generate");
const data = {
  length: null,
  lowerCase: null,
  upperCase: null,
  numbers: null,
  specialChar: null,
};
// Write password to the #password input
function writePassword() {
  const password = generatePassword(data);
  const passwordText = document.querySelector("#password");

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
  const length = prompt(
    "How long would you like the password?\n(between 8 and 128 characters)",
    ""
  );
  let lengthValue = parseInt(length);
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
  if (isInputValid(data)) {
    closeForm();
    // TODO: Clear form
    writePassword();
  } else {
    alert("Please select at least 1 of the criteria options for your password");
  }
});

// Function to retrieve the radio button inputs on the Criteria form
function getCriteriaFormValues() {
  function getLowerCaseValue() {
    const lowerCaseValue = document.getElementsByName("lowerCase");
    for (let i = 0; i < lowerCaseValue.length; i++) {
      if (lowerCaseValue[i].checked) {
        console.log("Lower case values to be used " + lowerCaseValue[i].value);
        data.lowerCase = lowerCaseValue[i].value === "true";
      }
    }
  }
  function getUpperCaseValue() {
    const upperCaseValue = document.getElementsByName("upperCase");
    for (let i = 0; i < upperCaseValue.length; i++) {
      if (upperCaseValue[i].checked) {
        console.log("Upper case values to be used " + upperCaseValue[i].value);
        data.upperCase = upperCaseValue[i].value === "true";
      }
    }
  }
  function getNumbersValue() {
    const numbersValue = document.getElementsByName("numbers");
    for (let i = 0; i < numbersValue.length; i++) {
      if (numbersValue[i].checked) {
        console.log("Number values to be used " + numbersValue[i].value);
        data.numbers = numbersValue[i].value === "true";
      }
    }
  }
  function getSpecialCharsValue() {
    const specialCharsValue = document.getElementsByName("specialChar");
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

function isInputValid(data) {
  return data.lowerCase || data.upperCase || data.numbers || data.specialChar;
}

function generatePassword(opts) {
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
  console.log("Generating Password from character set:", superSet);
  let output = "";
  for (let i = 0; i < opts.length; i++) {
    output += superSet.charAt(Math.floor(Math.random() * superSet.length));
  }
  return output;
}
