const menu = document.querySelector('#menu')
const burgerMenu = document.getElementById('burgerControl');
const closeMenu = document.querySelector('#closeControl');
const overlay = document.querySelector('.overlay')
const productsSection = document.getElementById('products')

const buyBar = document.querySelector('#buyBar');
const header = document.querySelector('#header');


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
