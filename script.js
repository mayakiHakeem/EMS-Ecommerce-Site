/**
 *! M O D A L 
 **/ 
// Modal Display
let modal = document.getElementById('modalDisplay');

let openCart = document.getElementById('cart');

let continueShopping = document.getElementsByClassName('continueButton')[0];

openCart.onclick = function(){
    modal.style.display = "block";
}

continueShopping.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}

// Modal Form
let inputName = document.getElementById('nameInput');

let nameError = document.getElementById('nameError');

let inputEmail = document.getElementById('emailInput');

let emailError = document.getElementById('emailError');


inputName.onblur = function nameValidation(){
    if (inputName.value == ""){
        inputName.style.border = "2px solid red";
        nameError.innerHTML = "Please enter your name";
    } else{
        inputName.style.border = "2px solid green";
        nameError.innerHTML = "";
    }
}

inputEmail.onblur = function emailValidation(){
    if (inputEmail.value == ""){
        inputEmail.style.border = "2px solid red";
        emailError.innerHTML = "Please enter an email";
    } else if(!inputEmail.value.includes("@")){
        inputEmail.style.border = "2px solid red";
        emailError.innerHTML = "Invalid email";
    } else{
        inputEmail.style.border = "2px solid green";
        emailError.innerHTML = "";
    }
}

let inputPhone = document.getElementById('phoneInput');

let phoneError = document.getElementById('phoneError');

inputPhone.onblur = function phoneValidation(){
    if (inputPhone.value == ""){
        inputPhone.style.border = "2px solid red";
        phoneError.innerHTML = "Please enter your telephone number";
    } 
    else if(!Number.isNaN(Number(inputPhon.value))){
        inputPhone.style.border = "2px solid red";
        phoneError.innerHTML = "Phone number can only be numbers";
    } 
    else if(inputPhone.value.length < 11){
        inputPhone.style.border = "2px solid red";
        phoneError.innerHTML = "Phone number cannot be less than 11 characters";
    } else{
        inputPhone.style.border = "2px solid green";
        phoneError.innerHTML = "";
    }
}

// let addToCartButtons = document.getElementsByClassName('proCart');
// for (let i =o; i < addToCartButtons.length; i++){
//     addToCartButtons[i].addEventListener('click', addToCart)

// }

// function addToCart(event){
//     let btn = event.target;
//     let btn_parent = btn.parentElement;
//     let btn_grandparent = btn.parentElement.parentElement;
//     let itemName = btn_parent.children[1][0].innerText;
//     let itemPrice = btn_parent.children[0][1].innerText;

//     console.log(itemName);
// }