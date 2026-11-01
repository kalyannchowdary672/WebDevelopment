
let countEl = document.getElementById("counter")

console.log(countEl)

let count = 0

function increment(){
    count = count + 1
    countEl.innerText = count
    console.log("count")
    
}


