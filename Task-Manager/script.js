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

const allTasks = [
  {
    task: "Gym jao",
    details: "Exercise karo",
    impo: true,
  },
  {
    task: "work par jao",
    details: "kam karo",
    impo: true,
  },
  {
    task: "Ghomny jao",
    details: "kharcha karo karo",
    impo: false,
  },
];

const form = document.querySelector("form");
const inputTask = document.querySelector(".input-task");
const inputDetails = document.querySelector(".input-details");
const checkbox = document.querySelector("form input[type='checkbox']");
const taskList = document.querySelector(".task-list");

function displayTasks() {
  let task = "";
  allTasks.forEach((el) => {
    console.log(el.task);
    task += `<div class="task">
              <p>${el.task} <span class=${el.impo}>impo</span></p>
              <button>Mark as completed</button>
            </div>`;
  });
  taskList.innerHTML = task;
}
displayTasks();

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  allTasks.push({
    task: inputTask.value,
    details: inputDetails,
    impo: checkbox.checked,
  });
  displayTasks();
});
