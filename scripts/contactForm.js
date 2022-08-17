const formEmail = document.getElementById('form-email');
const formButton = document.getElementById('form-button');
const formError = document.getElementById('form-error');

// Function to check validity of email name
function formNameChecker(formName) {
  let result = false;
  const formNameLowerCase = formName.value.toLowerCase();
  if (formName.value === formNameLowerCase) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Added event listener to form
formButton.addEventListener('click', (e) => {
  if (!formNameChecker(formEmail)) {
    e.preventDefault();
    formError.classList.add('active');
    formError.textContent = `Please make your email in lowercase --> ${formEmail.value.toLowerCase()}`;
  }
});
