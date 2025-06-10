const button = document.querySelector("button");
const tag = document.querySelector(".tag");

let isFriend = false;

function handleUserAttraction() {
  if (!isFriend) {
    tag.textContent = "Friend";
    tag.style.color = "green";
    button.textContent = "Remove Friend";
    isFriend = true;
  } else {
    tag.textContent = "Stranger";
    tag.style.color = "red";
    button.textContent = "Send Request";
    isFriend = false;
  }
}
button.addEventListener("click", handleUserAttraction);
