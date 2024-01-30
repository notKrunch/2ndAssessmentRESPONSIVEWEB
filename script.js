// script.js

document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
   
    addToCartButtons.forEach(function(button) {
       button.addEventListener('click', function() {
         alert('Item added to cart!');
       });
    });
   });