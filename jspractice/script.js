let age = 20 

if(age > 21){
    console.log("welcome!")
}else{
    console.log("your not allowed")
}

let hasdiscount = true

function preorder(){
    if(hasdiscount){
        console.log("you got the coupon")
        hasdiscount=false
    }else{
        console.log("your not eligible!")
    }
}
preorder()
preorder()