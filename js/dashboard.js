// Menu DOM elements 
const menu = document.querySelector('#menu')
const burgerMenu = document.getElementById('burgerControl');
const closeMenu = document.querySelector('#closeControl');
const overlay = document.querySelector('.overlay')
const productsSection = document.getElementById('products')

const buyBar = document.querySelector('#buyBar');
const header = document.querySelector('#header');


// Control products DOM elements
const checkControl = document.querySelector("input[type=checkbox]");
const quantityControl = document.querySelector('input[type=number]');
const quantityDiv = document.querySelector('.card__quantity');


// console.log(burgerMenu);
// console.log(closeMenu);
// console.log(checkControl);
// console.log(quantityDiv);
// console.log(overlay);

burgerMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);

checkControl.addEventListener('change', function(){
    if(this.checked){
        quantityDiv.classList.add('is-active');
    } else{
        console.log('Item no select')
        quantityDiv.classList.remove('is-active');
    }
});


// Functions to menu
function showMenu(){
    menu.classList.add('is-active');
    overlay.classList.add('is-active');
    productsSection.classList.add('is-back');
    buyBar.classList.add('is-desactive');
    header.classList.add('is-desactive');

}

function hideMenu(){
    menu.classList.remove('is-active');
    overlay.classList.remove('is-active');
    productsSection.classList.remove('is-back');
    buyBar.classList.remove('is-desactive');
    header.classList.remove('is-desactive');

}

