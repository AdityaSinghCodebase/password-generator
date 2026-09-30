// CHARACTERSET FOR CHECKBOXES

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowercase = "abcdefghijklmnopqrstuvwxyz";

const numbers = "0123456789";

const symbols = "!@#$%^&*()_+-=[]{}";

// Element Variables

const password = document.getElementById("password");

const copyBtn = document.getElementById("copy-btn");

const uppercaseCheck = document.getElementById("uppercase");

const lowercaseCheck = document.getElementById("lowercase");

const numberCheck = document.getElementById("numbers");

const symbolsCheck = document.getElementById("symbols");

const generateBtn = document.getElementById("generate-btn");

const passwordRange = document.getElementById("length");

const lenghtValueShow = document.getElementById("length-value");

const strength = document.getElementById("strength");

//for range

passwordRange.addEventListener("input", function () {
  lenghtValueShow.innerText = passwordRange.value;
});

let characters = "";
let strengthScore = 0;

// To Generate Password Btn

generateBtn.addEventListener("click", function () {
  characters = "";
  const passwordLength = passwordRange.value;

  if (uppercaseCheck.checked) {
    characters += uppercase;
    strengthScore++;
  }

  if (lowercaseCheck.checked) {
    characters += lowercase;
    strengthScore++;
  }
  if (numberCheck.checked) {
    characters += numbers;
    strengthScore++;
  }

  if (symbolsCheck.checked) {
    characters += symbols;
    strengthScore++;
  }

  if (characters === "") {
    alert("Select at least one options");
    return;
  }
  //   console.log(characters);

  let generatePassword = "";

  let strengthText = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters[randomIndex];
    generatePassword += randomCharacter;
  }

  if (passwordLength >= 12) {
    strengthScore++;
  }
  if (strengthScore <= 2) {
    strengthText = "Week";
  } else if (strengthScore <= 4) {
    strengthText = "Medium";
  } else {
    strengthText = "Strong";
  }

  strength.textContent = `Strength: ${strengthText}`;
  password.value = generatePassword;
  copyBtn.textContent = "Copy";
});

// To Copy btn

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(password.value);

  copyBtn.textContent = "Copied";

  setTimeout(function () {
    copyBtn.textContent = "Copy";
  }, 2000);
});
