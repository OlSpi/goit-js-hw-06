const validator = document.querySelector("#validation-input");

validator.addEventListener("blur", onInputChange);

function onInputChange(event) {
  const inputValue = event.currentTarget.value.length;
  const required = Number(event.currentTarget.dataset.length);

  if (inputValue === required) {
    validator.classList.add("valid");
    validator.classList.remove("invalid");
  } else {
    validator.classList.add("invalid");
    validator.classList.remove("valid");
  }
}
