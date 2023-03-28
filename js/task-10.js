function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
const boxes = document.querySelector("#boxes");

create.addEventListener("click", addColection);

function addColection(amount) {
  boxes.innerHTML = "";
  let elements = [];
  amount = input.value;
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    elements.push(box);
  }
  boxes.append(...elements);
}
destroy.addEventListener("click", deleteColection);

function deleteColection() {
  boxes.innerHTML = "";
  input.value = "";
}
