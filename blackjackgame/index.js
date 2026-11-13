let firstcard = 2
let secondcard = 12
let cards = [firstcard,secondcard]
let sum = 0
sum = firstcard + secondcard
let Hasblackjack = false
let isAlive = true
let message = ""
let msgEl = document.getElementById("msg-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame(){
  renderGame()
}

function renderGame() {
    sumEl.textContent = "sum:" + sum
    cardsEl.textContent = "cards: " + cards[0]+ "  " + cards[1]
  if (sum < 21) {
    message = "Do you want to draw a new card ? "
  } else if (sum === 21) {
    message = "you win the game "
    Hasblackjack = true
  } else {
    message = "you lost the game "
    isAlive = false
  }
  msgEl.textContent = message
}

function newCard(){
    let card = 7
    sum += card
    renderGame()
}

