const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (!email.value || password.value === "") {
    alert("Всі поля повинні бути заповнені ");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    form.reset();
  }
}
