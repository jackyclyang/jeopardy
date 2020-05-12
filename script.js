let categories = []
const BASIC_URL = "http://jservice.io/api/";
const CATEGORIES_URL = BASIC_URL + "categories?count=6&offset=" + Math.random() * 100

fetchCategories(CATEGORIES_URL)

async function fetchCategories(url) {
  try {
    let categoriesData = await axios.get(url);

    for (let i = 0; i < 6; i++) {
      categories[i] = categoriesData.data[i]
      console.log(categoriesData.data[i].id)
      console.log(categoriesData.data[i].title)
    }
    //addTitles(categories)
    //renderClues(categories)
  } catch (error) {
    console.log(error)
  }
}

function renderClues(categories) {

}


// Modal code (with some adjustments) from W3School: https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal
let modal = document.getElementById("myModal")
// Get the clue that opens the modal
let clueArray = []

for (let i = 0; i < 30; i++) {
  clueArray[i] = document.querySelectorAll(".clue")[i]
  clueArray[i].addEventListener("click", showModal)
}

// Get the <span> element that closes the modal
let giveUp = document.getElementsByClassName("give-up")[0]

// When the user clicks on the button, open the modal
function showModal() {
  modal.style.display = "block"
}

// When the user clicks on <span> (x), close the modal
giveUp.onclick = function () {
  modal.style.display = "none"
}
