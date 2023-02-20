function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElement = document.querySelector("body");
const spanElement = document.querySelector(".color");
const btnElement = document.querySelector(".change-color");

btnElement.addEventListener("click", onChangeColorClick);

function onChangeColorClick() {
  bodyElement.style.backgroundColor = getRandomHexColor();
  spanElement.textContent = bodyElement.style.backgroundColor;
}
