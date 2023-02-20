const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSendForm);

function onSendForm(event) {
  event.preventDefault();
  const elementsForm = event.currentTarget.elements;
  const email = elementsForm.email.value;
  const password = elementsForm.password.value;
  if (email === "" || password === "") {
    alert("Усі поля повинні бути заповнені !!!");
  } else {
    const newForm = {
      email,
      password,
    };
    console.log(newForm);
    event.currentTarget.reset();
  }
}
