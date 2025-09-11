function openFeatures() {
  const allElem = document.querySelectorAll(".elem");
  const elemPage = document.querySelectorAll(".elm-page");
  const closePageBtn = document.querySelectorAll(".ri-close-line");

  allElem.forEach((elem) => {
    elem.addEventListener("click", () => {
      elemPage[elem.id].style.display = "block";
    });
  });

  closePageBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      elemPage[btn.id].style.display = "none";
    });
  });
}
openFeatures()