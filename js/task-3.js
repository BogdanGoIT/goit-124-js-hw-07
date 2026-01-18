const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', evt => {
  const targetValue = evt.target.value.trim();

  if (targetValue !== '') {
    nameOutput.textContent = targetValue;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});
