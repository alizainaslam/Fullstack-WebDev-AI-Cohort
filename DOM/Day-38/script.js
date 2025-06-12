const colorGeneratorBtn = document.querySelector(".color-generator");
const colorCard = document.querySelector(".color-card");
const guessBtn = document.querySelector(".guess-btn");
const winnerResult = document.querySelector(".result");

function randomValue(length) {
  return Math.floor(Math.random() * length);
}

colorGeneratorBtn.addEventListener("click", function () {
  colorCard.style.backgroundColor = `rgb(${randomValue(256)},${randomValue(
    256
  )}, ${randomValue(256)} )`;
});

// Guess the winner team
const teams = [
  {
    name: "MI",
    primaryColor: "blue",
    secondaryColor: "gold",
  },
  {
    name: "CSK",
    primaryColor: "yellow",
    secondaryColor: "blue",
  },
  {
    name: "RCB",
    primaryColor: "red",
    secondaryColor: "black",
  },
  {
    name: "KKR",
    primaryColor: "purple",
    secondaryColor: "gold",
  },
  {
    name: "DC",
    primaryColor: "blue",
    secondaryColor: "red",
  },
  {
    name: "RR",
    primaryColor: "pink",
    secondaryColor: "blue",
  },
  {
    name: "SRH",
    primaryColor: "orange",
    secondaryColor: "black",
  },
  {
    name: "LSG",
    primaryColor: "lightblue",
    secondaryColor: "orange",
  },
  {
    name: "GT",
    primaryColor: "darkblue",
    secondaryColor: "gold",
  },
  {
    name: "PBKS",
    primaryColor: "red",
    secondaryColor: "gold",
  },
];

guessBtn.addEventListener("click", function () {
  const team = randomValue(teams.length);
  const { name, primaryColor, secondaryColor } = teams[team];
  winnerResult.textContent = name;
  winnerResult.style.backgroundColor = primaryColor;
  winnerResult.style.color = secondaryColor;
});
