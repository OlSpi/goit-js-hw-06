const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul");

const listEl = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.classList.add("item");
  element.textContent = ingredient;

  return element;
});

list.append(...listEl);
console.log(list);
