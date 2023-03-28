const item = document.querySelectorAll(".item");
console.log("Number of categories:", item.length);

const listItems = item.forEach((element) => {
  const titleEl = element.firstElementChild.textContent;

  console.log("Category:", titleEl);
  const category = element.lastElementChild;
  const listEl = category.querySelectorAll("li");

  console.log("Elements:", listEl.length);
});
