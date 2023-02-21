// 1.Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Якщо кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputText = document.querySelector("#validation-input");
const textLength = inputText.dataset.length;

inputText.addEventListener("blur", onBlurText);
inputText.addEventListener("focus", onFocusText);

function onBlurText(event) {
  if (Number(event.currentTarget.value.length) === Number(textLength)) {
    inputText.classList.add("valid");
  } else {
    inputText.classList.add("invalid");
  }
}

function onFocusText() {
  inputText.classList.remove("invalid", "valid");
}
