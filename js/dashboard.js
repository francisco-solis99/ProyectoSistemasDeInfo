// Menu DOM elements 
const menu = document.querySelector('#menu')
const burgerMenu = document.getElementById('burgerControl');
const closeMenu = document.querySelector('#closeControl');
const overlay = document.querySelector('.overlay')
const productsSection = document.getElementById('products')

const buyBar = document.querySelector('#buyBar');
const header = document.querySelector('#header');


// Control products DOM elements
// const checkControl = document.querySelector("input[type=checkbox]");
// const quantityControl = document.querySelector('input[type=number]');



burgerMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);


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

// Hide menu with target 
window.addEventListener('click', function(e){
    if(e.target === overlay){
        hideMenu();
    }
});


// Elementos del DOM para control de los checkboxes
const checkboxes = document.getElementsByName('check');
console.log(checkboxes);
const quantityDiv = document.getElementsByClassName('card__quantity');
console.log(quantityDiv);

let selectProducts = [];

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        selectProducts = Array.from(checkboxes).filter(i => i.checked).map(i => i.value)
       
        for(let i = 0; i < checkboxes.length; i+=1){
            if(checkboxes[i].checked){
                quantityDiv[i].classList.add('is-active');
            } else{
                quantityDiv[i].classList.remove('is-active');
            }
        }
        console.log(selectProducts);
    })
});