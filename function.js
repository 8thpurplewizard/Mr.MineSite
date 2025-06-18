// Function to toggle the navigation menu in responsive mode
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Function to convert a number to a human-readable format with postfixes
function convrtFunction() {
  let number = strip(document.getElementById("userInput").value);
  const outputElement = document.getElementById("output");

  postfixes = [
    "",
    "k",
    "Million",
    "Billion",
    "Trillion",
    "Quadrillion",
    "Quintillion",
    "Sextillion",
    "Septillion",
    "Octillion",
    "Nonillion",
  ];
  count = 0;
  while (number >= 1000 && count < postfixes.length) {
    number /= 1000;
    count++;
  }
  outputElement.textContent =
    "Output: " + strip(number) + " " + postfixes[count];
  return number + postfixes[count];
}

function strip(number) {
  return parseFloat(number).toPrecision(12);
}

// Function to toggle the visibility of the info popup
function showInfoPopup() {
  document.getElementById("infoPopup").style.display = "block";
}

function hideInfoPopup() {
  document.getElementById("infoPopup").style.display = "none";
}

function mrMineSaveDecoder() {
  const rawSave = document.getElementById("mrMineSaveInput").value;
  const partsSave = rawSave.split("|"); //needs to be cleaned from the name
  const saveWithoutName = partsSave.length > 1 ? partsSave[1] : rawSave;
  var decodedSave = atob(atob(saveWithoutName));
  const numbers = decodedSave.split("|");
  const outputElement = document.getElementById("outputSave");
  outputElement.innerHTML =
    saveNameToNumber("Money", numbers[0]) +
    saveNameToNumber("Kilometers", numbers[1]) +
    saveNameToNumber("Depth Experience", numbers[2]) +
    saveNameToNumber("Steam User ID", numbers[3]) +
    saveNameToNumber("BP ID", numbers[4]) +
    saveNameToNumber("BP ID", numbers[5]) +
    saveNameToNumber("BP ID", numbers[6]) +
    saveNameToNumber("Cargo ID", numbers[7]) +
    saveNameToNumber("idk yet", numbers[8]);
}

function saveNameToNumber(name, number) {
  return `<h3>${name}: ${number}</h3>`;
}
