const changeInput = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

changeInput.addEventListener("input", onMoveInput);

function onMoveInput(event) {
  spanText.style.fontSize = `${event.currentTarget.value}px`;
}
