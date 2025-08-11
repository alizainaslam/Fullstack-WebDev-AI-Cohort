const nav = document.querySelector("nav");
const hoverEffect = document.querySelector(".hover-effect");
const cursorDot = document.querySelector(".cursor-dot");
const postImg = document.querySelector(".post-img");
const redHeart = document.querySelector(".red-heart");
const unfilledHeart = document.querySelector(".unfilled-heart");

let topScroll = window.pageYOffset;
nav.style.transition = "transform 0.3s cubic-bezier(0.19, 1, 0.22, 1)";
window.addEventListener("scroll", () => {
  let currentScorll = window.pageYOffset;
  if (currentScorll > topScroll) {
    nav.style.transform = "translateY(-100%)";
  } else {
    nav.style.transform = "translateY(0%)";
  }
  topScroll = currentScorll;
});

hoverEffect.addEventListener("mousemove", (dets) => {
  cursorDot.style.left = dets.x + "px";
  cursorDot.style.top = dets.y + "px";
});

let isHeartPopped = false;
let isLike = false;

postImg.addEventListener("dblclick", () => {
  if (!isHeartPopped) {
    redHeart.classList.toggle("show-heart");
    unfilledHeart.setAttribute("src", "public/red-heart.svg");
    isLike = true;
    isHeartPopped = true;
    setTimeout(() => {
      redHeart.classList.toggle("show-heart");
      redHeart.classList.toggle("heart-upside");
      setTimeout(() => {
        redHeart.classList.toggle("heart-upside");
      }, 900);
      isHeartPopped = false;
    }, 900);
  }
});

unfilledHeart.addEventListener("click", () => {
  if (!isLike) {
    unfilledHeart.setAttribute("src", "public/red-heart.svg");
    isLike = true;
  } else if (isLike) {
    unfilledHeart.setAttribute("src", "public/heart.svg");
    isLike = false;
  }
});
