const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Для кожного елемента масиву ingredients:

// 1.Створити окремий елемент <li>. Обов'язково використати метод document.createElement().Додати назву інгредієнта як його текстовий вміст.
// 2.Додати елементу клас item.
// 3. Вставити усі <li> за одну операцію у список ul#ingredients.

const ingredientsList = document.querySelector("#ingredients");

// console.log(ingredientsList);

const itemList = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = `${ingredients}`;
  return item;
});

// console.log(itemList);

ingredientsList.append(...itemList);
console.log(ingredientsList);
