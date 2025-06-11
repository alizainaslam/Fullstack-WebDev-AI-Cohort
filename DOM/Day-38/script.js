const colorGeneratorBtn = document.querySelector(".color-generator");
const colorCard = document.querySelector(".color-card");

function colorValue() {
  return Math.floor(Math.random() * 256);
}

colorGeneratorBtn.addEventListener("click", function () {
  colorCard.style.backgroundColor = `rgb(${colorValue()},${colorValue()}, ${colorValue()} )`;
});
