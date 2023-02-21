// 1.Створити змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// 2.Додати слухачів кліків до кнопок, всередині яких збільшує або зменшує значення лічильника.
// 3.Оновлювати інтерфейс новим значенням змінної counterValue.

const counterValue = document.querySelector("#value");
let newValue = 0;

const btnUp = document.querySelector(`button[ data-action = "increment"]`);
const btnDown = document.querySelector(`button[ data-action = "decreentm"]`);

btnUp.addEventListener("click", onBtnUpClick);
btnDown.addEventListener("click", onBtnDownClick);

function onBtnUpClick() {
  newValue += 1;
  counterValue.textContent = newValue;
}

function onBtnDownClick() {
  newValue -= 1;
  counterValue.textContent = newValue;
}
