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

function fandomUserLatestContributions() {
  const username = document.getElementById("fandomUser").value.trim();
  const apiUrl = `https://mrmine.fandom.com/api.php?action=query&list=usercontribs&ucuser=${username}&format=json&origin=*`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const outputElement = document.getElementById("fandomUserInfo");
      // You'll find the contributions data under data.query.usercontribs
      const contributions = data.query.usercontribs;
      console.log(`Contributions for ${username}:`);
      contributions.forEach((contrib) => {
        console.log(
          `  Page: ${contrib.title}, Revision ID: ${contrib.revid}, Timestamp: ${contrib.timestamp}`
        );
        outputElement.innerHTML += `<p>Page: ${contrib.title}, Timestamp: ${contrib.timestamp}</p>`;
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
