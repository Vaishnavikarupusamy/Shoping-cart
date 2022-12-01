//cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart")

cartIcon.onclick = () =>{
    cart.classList.add("active");
}
//update total
function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for(var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartbox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartbox.getElementsByClassName("cart-quantity")[0];
        var price = parsefloat(priceElement.innerText.replace("₹", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
        
        document.getElementsByClassName('total-price')[0].innerText = '₹' + total;
    }
}