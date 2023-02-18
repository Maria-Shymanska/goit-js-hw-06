const inputName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    spanName.textContent = "Anomymus";
  } else {
    spanName.textContent = event.currentTarget.value;
  }
});
