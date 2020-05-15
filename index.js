// Modal code (with some adjustments) from W3School: https://www.w3schools.com/howto/howto_css_modals.asp
// When the user clicks on the button, open the modal

let modal = document.querySelector("#myModal")
let button = document.querySelector("#special-rules")
let close = document.querySelector(".close")

button.addEventListener("click", showModal)
close.addEventListener("click", closeModal)

function showModal() {
  modal.style.display = "block"
}

// When the user clicks on "X", close the modal
function closeModal(e) {
  e.preventDefault();
  modal.style.display = "none"
}