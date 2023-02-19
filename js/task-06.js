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
