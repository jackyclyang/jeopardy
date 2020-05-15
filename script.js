// APIs
const BASIC_URL = "http://jservice.io/api/"
const CATEGORIES_URL = BASIC_URL + "categories?count=6&offset=" + Math.random() * 1000
let CLUES_URL = BASIC_URL + "clues/"

let categories = [] // To store categories from the first API call
let clueAnswers = [] // For the data cleaning of each clue's answer(s)
let clueAnswer
let playerAnswer
let downloadTimer
let clueScore
let playerScore = 0
let timeleft = 10

// DOM elements
let clueContent = document.querySelector("#detailed-clue")
let closeButton = document.querySelector(".close")
let submit = document.querySelector('.submit')
let timerElement = document.getElementById("countdown")
let modal = document.getElementById("myModal")
let titleElements = document.querySelectorAll(".category")
let clueElements = document.querySelectorAll(".clue")
let correctAnswerElement = document.querySelector("#correct-answer")
let scoreElement = document.querySelector("#score-number")



// fetch categories from the first API
fetchCategories(CATEGORIES_URL)

// When dollar amount clicked, open the modal
for (let i = 0; i < 30; i++) {
  clueElements[i].addEventListener("click", () => {
    if (clueElements[i].style.color != "grey") {
      showModal()
      clueElements[i].style.color = "grey"
      renderClues(i, (i % 5))
      clueElements[i].classList.add("clicked-clue") // disable the clicked clue
    }
  })
}

// When "submit" clicked, check player answer
submit.addEventListener("click", (e) => {
  e.preventDefault()
  checkAnswer()
})
// When "I give up" clicked, close the modal
closeButton.addEventListener("click", closeModal)

// Fetch 6 categories from the first API call and add to the page
async function fetchCategories(url) {
  try {
    let categoriesData = await axios.get(url);
    for (let i = 0; i < 6; i++) {
      categories[i] = categoriesData.data[i]
    }
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
  let categoryIndex = Math.floor(i / 5) // To calculate which category is it in the cateogires array
  let categoryID = categories[categoryIndex].id
  let new_clues_URL

  new_clues_URL = CLUES_URL + "?category=" + categoryID

  try {
    let clueDataArray = await axios.get(new_clues_URL)
    console.log(clueDataArray)
    let clueData = clueDataArray.data[j]

    // Some API data returns empty array
    if (clueData.question === "") {
      clueData = clueDataArray.data[j + 1]
    }

    clueInModal = clueData.question
    clueContent.innerHTML = clueInModal.toUpperCase()
    // current dollar amount for this question
    clueScore = (j + 1) * 200

    // need to do some data cleaning of clue answers (e.g. remove html formatting and situations like the answer is "A (or B)")
    clueAnswer = clueData.answer
    clueAnswers = []
    if (clueAnswer.includes("<") || clueAnswer.includes("<i>")
      || clueAnswer.includes(" or ") || clueAnswer.includes("/")
      || clueAnswer.includes("\\") || clueAnswer.includes("(")
      || clueAnswer.includes("\"")) {
      clueAnswer = clueAnswer.replace("<i>", "")
      clueAnswer = clueAnswer.replace("</i>", "")
      clueAnswer = clueAnswer.replace("\\", "")
      clueAnswer = clueAnswer.replace("<", "")
      clueAnswer = clueAnswer.replace(">", "")
      clueAnswer = clueAnswer.replace("(", "")
      clueAnswer = clueAnswer.replace(")", "")
      clueAnswer = clueAnswer.replace("/", "")
      clueAnswer = clueAnswer.replace("\"", "")
      clueAnswer = clueAnswer.replace("\"", "")
      if (clueAnswer.includes(" or ")) {
        clueAnswers = clueAnswer.split(" or ")
      }
    }
    console.log(clueAnswer)
    clueAnswers.push(clueAnswer)

  } catch (error) {
    console.log(error)
  }
}

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

// Check if the player has the right answer
function checkAnswer() {
  if (document.querySelector("input").value != "") {
    playerAnswer = document.querySelector("input").value
  }
  else {
    playerAnswer = "no-answer!" // if no answer
  }

  for (let i = 0; i < clueAnswers.length; i++) {
    if (timerElement.innerHTML === "0") {
      correctAnswerElement.innerHTML = "The answer is " + clueAnswers[0]
      closeButton.style.display = "block"
    }
    else if (playerAnswer.toUpperCase() === clueAnswers[i].toUpperCase()) {
      correctAnswerElement.innerHTML = "&#10003 Correct!"
      playerScore = playerScore + clueScore
      clearInterval(downloadTimer)
      timerElement.innerHTML = "&nbsp"
      closeButton.style.display = "block"
    }
    else {
      correctAnswerElement.innerHTML = "Incorrect :( The answer is " + clueAnswers[0]
      playerScore = playerScore + clueScore * (-1)
      closeButton.style.display = "block"
      clearInterval(downloadTimer)
      timerElement.innerHTML = "&nbsp"
    }
  }
  scoreElement.innerText = playerScore
}

// countdown timer code (with minor adjustments) is from stackoverflow: https://stackoverflow.com/questions/31106189/create-a-simple-10-second-countdown
function countDown() {
  timeleft = 10;
  downloadTimer = setInterval(function () {
    document.getElementById("countdown").innerHTML = timeleft;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      checkAnswer()
    }
    timeleft -= 1;
  }, 1000);
}

// stop the countdown when player submitted answer and clear it out
function restartCountDown() {
  clearInterval(downloadTimer)
  timerElement.innerHTML = "10"
}
