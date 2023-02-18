// 1.Створити змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// 2.Додати слухачів кліків до кнопок, всередині яких збільшує або зменшує значення лічильника.
// 3.Оновлювати інтерфейс новим значенням змінної counterValue.

const valueBtn = document.querySelector("#counter");

let counterValue = 0;

const btnUp = document.querySelector(`button [data-action = "decrement"]`);
const btnDown = document.querySelector(`button [data-action = "increment"]`);

btnUp.addEventListener("click", counterValue);

btnDown.addEventListener("click", counterValue);

function onBtnUpClick() {
  counterValue += 1;
  valueBtn.textContent = counterValue;
}

function onBtnDownClick() {
  counterValue -= 1;
  valueBtn.textContent = counterValue;
}
