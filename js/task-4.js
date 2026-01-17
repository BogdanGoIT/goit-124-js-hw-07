const form = document.querySelector('.login-form');

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const email = evt.target.elements.email.value;
  const password = evt.target.elements.password.value;

  if (email.trim() && password.trim()) {
    const obj = { email, password };
    console.log(obj);
    form.reset();
  } else {
    alert('All form fields must be filled in');
  }
});
