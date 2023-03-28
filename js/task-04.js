let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);

const incrementtBtn = document.querySelector('[data-action="increment"]');
console.log(incrementtBtn);

const valuetBtn = document.querySelector("#value");

console.log(valuetBtn);

function increment() {
  counterValue += 1;
  console.log((valuetBtn.textContent = counterValue));
}
function decrement() {
  counterValue -= 1;
  console.log((valuetBtn.textContent = counterValue));
}

decrementBtn.addEventListener("click", decrement);
incrementtBtn.addEventListener("click", increment);
