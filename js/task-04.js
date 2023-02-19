// 1.Створити змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// 2.Додати слухачів кліків до кнопок, всередині яких збільшує або зменшує значення лічильника.
// 3.Оновлювати інтерфейс новим значенням змінної counterValue.

const valueBtn = document.querySelector("#value");
const btnUp = document.querySelector(`button [data-action = "decrement"]`);
const btnDown = document.querySelector(`button [data-action = "increment"]`);

let counterValue = 0;

const onBtnUpClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const onBtnDownClick = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

btnUp.addEventListener("click", onBtnUpClick);

btnDown.addEventListener("click", onBtnDownClick);
