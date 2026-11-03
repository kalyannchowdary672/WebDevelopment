let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("counter")
let count = 0


console.log("saveEl")

function increment(){
    count += 1
    countEl.innerText = count
}

function save(){
    let numbercount = count + " - "
    saveEl.textContent += numbercount
    countEl.innerText = 0
    count = 0
    
}

