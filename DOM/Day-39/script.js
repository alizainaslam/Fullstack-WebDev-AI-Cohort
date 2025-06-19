const btn = document.querySelector("button");
const percent = document.querySelector(".percent");
const fillBar = document.querySelector(".fill-bar");
let grow = 1;
let download = false;

function handleClick() {
  if (download) return;
  let loadingTime = Math.floor(Math.random() * 50);
  let stopLoading = loadingTime * 100;
  console.log(loadingTime, stopLoading);
  let int = setInterval(function () {
    percent.textContent = grow + "%";
    fillBar.style.width = grow + "%";
    grow++;
  }, loadingTime);
  setTimeout(() => {
    clearInterval(int);
    btn.style.opacity = 80 + "%";
    btn.textContent = "Downlaoded";
    download = true;
    btn.removeEventListener("click", handleClick);
  }, stopLoading);
}

btn.addEventListener("click", handleClick);
