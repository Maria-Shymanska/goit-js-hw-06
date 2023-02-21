// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElement = document.querySelector("body");
const spanElement = document.querySelector(".color");
const btnElement = document.querySelector(".change-color");

btnElement.addEventListener("click", ChangeColorClick);

function ChangeColorClick() {
  bodyElement.style.backgroundColor = getRandomHexColor();
  spanElement.textContent = bodyElement.style.backgroundColor = hexColor;
}
