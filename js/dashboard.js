// Menu DOM elements 
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


// Indicador de color segun si requiere receta o no
const recipe = document.querySelector('#recipe');
let recipeIf = document.querySelector('#recipeIf');

if(recipeIf.textContent === 'Si'){
    recipe.style.backgroundColor = '#d35656';
}
else{
    recipe.style.backgroundColor = '#498b49';
}

// Mantener el color una vez que es seleccioando
const addButton = document.querySelector('#submitButton');
console.log(addButton);

addButton.addEventListener('click', keepColor);

function keepColor(){
    addButton.style.backgroundColor = '#498b49';
    addButton.disabled = true;

    if (addButton.disabled === true ){
        addButton.value = 'Agregado'
    }
}