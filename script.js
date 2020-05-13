
const BASIC_URL = "http://jservice.io/api/"
const CATEGORIES_URL = BASIC_URL + "categories?count=6&offset=" + Math.random() * 1000
let CLUE_URL = BASIC_URL + "clues/"
let modal = document.getElementById("myModal")
let clueContent = document.querySelector("#detailed-clue")
let giveUp = document.querySelector(".give-up")
let categories = []

let titleElements = document.querySelectorAll(".category")
let clueElements = document.querySelectorAll(".clue")

// fetch categories from the first API
fetchCategories(CATEGORIES_URL)

// When dollar amount clicked, open the modal
for (let i = 0; i < 30; i++) {
  clueElements[i].addEventListener("click", () => {
    showModal()
    console.log(i % 5)
    renderClues(i, (i % 5) + 1)
  })
}
// When "I give up" clicked, close the modal
giveUp.addEventListener("click", closeModal)



// Fetch 6 categories from the first API call and add to the page
async function fetchCategories(url) {
  try {
    let categoriesData = await axios.get(url);
    for (let i = 0; i < 6; i++) {
      categories[i] = categoriesData.data[i]
    }
    console.log(categories)
    addTitles(categories)

  } catch (error) {
    console.log(error)
  }
}

// Add titles onto the 6 categories
function addTitles(categories) {
  for (let i = 0; i < 6; i++) {
    titleElements[i].innerText = categories[i].title.toUpperCase();
  }
}


// when a dollar amount is clicked do the 2nd API call to get the clue
async function renderClues(i, j) {
  let clueInModal = " "
  let clueAnswer = " "
  let categoryIndex = Math.floor(i / 5)
  let categoryID = categories[categoryIndex].id

  CLUE_URL = CLUE_URL + "?value=" + j * 200 + "&category=" + categoryID
  console.log(CLUE_URL)

  try {
    let clueData = await axios.get(CLUE_URL)
    console.log(clueData)
    clueInModal = clueData.data[0].question
    clueAnswer = clueData.data[0].answer

    clueContent.innerHTML = clueInModal.toUpperCase()
    console.log(categoryIndex)

  } catch (error) {
    console.log(error)
  }


}

// Modal code (with some adjustments) from W3School: https://www.w3schools.com/howto/howto_css_modals.asp
// When the user clicks on the button, open the modal
function showModal() {
  modal.style.display = "block"
}

// When the user clicks on "I give up", close the modal
function closeModal(e) {
  e.preventDefault();
  modal.style.display = "none"
}