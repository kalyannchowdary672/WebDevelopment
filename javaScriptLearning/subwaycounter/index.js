
let countEl = document.getElementById("counter")
let count = 0


function increment(){
    count = count + 1
    countEl.innerText = count
}

function save(){
    console.log(count)
}

let message = "you have three notifications"
console.log(message)

let name = "kalyan"
let greeting = "Hi , my name is"
let myGreeting = greeting + " "+ name

console.log(myGreeting)