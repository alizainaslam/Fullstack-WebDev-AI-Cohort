const nav = document.querySelector("nav");
const hoverEffect = document.querySelector(".hover-effect");
const cursorDot = document.querySelector(".cursor-dot");

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
