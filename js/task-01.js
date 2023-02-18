// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const countCategoriesElement =
  document.querySelector("#categories").children.length;

console.log(`Number of categories:`, countCategoriesElement);

const countElements = document.querySelectorAll(".item");

countElements.forEach((countElements) =>
  console.log(
    `Category: ${countElements.firstElementChild.textContent}  Elements: ${countElements.lastElementChild.children.length}`
  )
);