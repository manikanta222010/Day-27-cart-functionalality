/*!
* Start Bootstrap - Shop Homepage v5.0.4 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project



function ratingStars(){
    let rating = 5   //can be changed according to the product
    var stars = document.querySelectorAll(".rating")
    for(let i=0; i<stars.length; i++){
        for(let j=0; j<rating; j++){
            stars[i].innerHTML += `
        <div class="bi-star-fill"></div>
        `
        }
        
    }
}
ratingStars()


function disableAddToCartButton(num){

    if(!document.querySelectorAll(".cart-button")[num].classList.contains('disabled')){
        // console.log(document.querySelector("#cart-count").innerText)
        document.querySelector("#cart-count").innerText = parseInt(document.querySelector("#cart-count").innerText) + 1
        // console.log(document.querySelector("#cart-count").innerText)
        document.querySelectorAll(".cart-button")[num].style.display = "none"
        document.querySelectorAll(".remove-cart-button")[num].style.display = "block"
    }
}

function disableRemoveButton(num){
    if(!document.querySelectorAll(".cart-button")[num].classList.contains('disabled')){
        document.querySelector("#cart-count").innerText = parseInt(document.querySelector("#cart-count").innerText) - 1
        document.querySelectorAll(".cart-button")[num].style.display = "block"
        document.querySelectorAll(".remove-cart-button")[num].style.display = "none"
    }
}