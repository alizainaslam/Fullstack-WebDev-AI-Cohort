const form = document.querySelector("form");
const inputTask = document.querySelector(".input-task");
const inputDetails = document.querySelector(".input-details");

function openFeatures() {
  const allElem = document.querySelectorAll(".elem");
  const elemPage = document.querySelectorAll(".feature");
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
openFeatures();

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  console.log(inputTask.value, inputDetails.value);
});
