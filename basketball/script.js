let boxEl = document.getElementById("box1")
let box2El = document.getElementById("box2")

let homecount = 0;
let guestcount = 0;

function add1(){
    homecount += 1
    boxEl.innerText = homecount

}
function add2(){
    homecount += 2
    boxEl.innerText = homecount
   

}
function add3(){
    homecount += 3
    boxEl.innerText = homecount
    
}

function increment1(){
    guestcount += 1
    box2El.innerText = guestcount
}
function increment2(){
    guestcount += 2
    box2El.innerText = guestcount
}
function increment3(){
    guestcount += 3
    box2El.innerText = guestcount
}
function reset(){
    homecount = 0
    guestcount = 0
    boxEl.innerText = homecount
    box2El.innerText = guestcount
}