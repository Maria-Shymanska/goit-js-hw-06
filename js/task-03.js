const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// 1. Написати скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.
// 2. Використати масив об'єктів images для створення елементів <img>, вкладених в <li>.
// 3. Для створення розмітки потрібно використати шаблонні рядки і метод insertAdjacentHTML().
// 4. Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// 5. Додати мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const galleryList = document.querySelector(".gallery");

const createItems = images
  .map(({ url, alt }) => `<li> <img src= ${url} alt= ${alt} width = 70%> </li>`)
  .join("");

galleryList.insertAdjacentHTML("afterbegin", createItems);

console.log(galleryList);

galleryList.style.backgroundColor = "tomato";
galleryList.style.listStyle = "none";
