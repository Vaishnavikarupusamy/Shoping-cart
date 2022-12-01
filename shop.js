//OPEN & CLOSE CART
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener('click', () => {
 cart.classList.add('active');
});

closeCart.addEventListener("click",() =>{
    cart.classList.remove("active");
});

//start when the document is ready
if(document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded',start);
}else{
    start();
}

//=============== START ===============
function start(){
    addEvents()
}

//=========== UPDATE & REMENDER ===========
function update(){
    addEvents()
    updateTotal();
}

//=============== ADD EVENTS ===============
function addEvents(){
    //remove items from cart
    let cartRemove_btns = document.querySelectorAll('.cart-remove');
    console.log(cartRemove_btns);
    cartRemove_btns.forEach(btn => {
        btn.addEventListener("click", handle_removeCartItem);
    });

    //change item quantity
    let cartQuantity_inputs = document.querySelectorAll('.cart-quantity');
    cartQuantity_inputs.forEach(input => {
        input.addEventListener("change", handle_changeItemQuantity);
    });

    //Add item to cart
    let addcart_btns = document.querySelectorAll(".add-cart");
    addcart_btns.forEach(btn =>{
        btn.addEventListener("click", handle_addCartItem);
    })
}

//============= HANDLE EVENTS FUNCTIONS =============
function handle_addCartItem(){
    let product = this.parentElement;
    let title = product.querySelector(".product-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    let imgSrc = product.querySelector(".product-img").src;
    console.log(title,price,imgSrc);

    let newToADD = {
        title,
        price,
        imgSrc,
    };

    //Add product to cart
    let cartBoxElement = CartBoxComponent(title,price,imgSrc);
    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode);

    update();
}

function handle_removeCartItem(){
    this.parentElement.remove();

    update();
}

function handle_changeItemQuantity(){
    if(isNaN(this.value)  || this.value < 1){
        this.value = 1;
    }
    this.value=math = floor(this.value); //to keep at integer

    update();
}

// =========== UPDATE & RERENDER FUNCTIONS ===========
function updateTotal(){
    let cartBoxes =document.querySelectorAll('.cart-box');
    const totalElement = cart.querySelector('.total-price');
    let total = 0;
    cartBoxes.forEach(cartBox =>{
        let priceElement = cartBox.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("₹",""));
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total +=price * quantity;
    });

 //keep 2digits after the decimal point
 total = total.toFixed(2);
 // or you can use also
 //total = math.round(total * 100) / 100;

    totalElement.innerHTML = "₹" + total;
}


//============= HTML COMPONENTS ==============
CartBoxComponent(title,price,imgSrc)





