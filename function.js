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
