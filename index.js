// Modal code (with some adjustments) from W3School: https://www.w3schools.com/howto/howto_css_modals.asp
// When the user clicks on the button, open the modal
function showModal() {
  modal.style.display = "block"
  closeButton.style.display = "none"
  let inputField = document.querySelector("input")
  inputField.focus();
  countDown()
}

// When the user clicks on "X", close the modal
function closeModal(e) {
  e.preventDefault();
  modal.style.display = "none"
  correctAnswerElement.innerHTML = ""
  document.querySelector("input").value = ""
  restartCountDown()
}