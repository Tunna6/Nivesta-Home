// ! sidebar 

let btn = document.getElementById('btn')
let sidebar = document.querySelector('.sidebar')
let searchBtn = document.querySelector('.bx-search')
let tooltips = document.querySelectorAll('.toooltip')
console.log(tooltips);

btn.addEventListener('click', function () {
    sidebar.classList.toggle('aktif');
    if (sidebar.classList.contains('aktif')) {
        tooltips.forEach(tool => {
            console.log(tool);
            tool.style.display = 'none';
        })
    } else {
        tooltips.forEach(tool => {
            console.log(tool);
            tool.style.display = 'block';
        })
    }
});

searchBtn.addEventListener('click', function () {
    sidebar.classList.toggle('aktif');
    if (sidebar.classList.contains('aktif')) {
        tooltips.forEach(tool => {
            console.log(tool);
            tool.style.display = 'none';
        })
    } else {
        tooltips.forEach(tool => {
            console.log(tool);
            tool.style.display = 'block';
        })
    }
});

//! sidebar

//! sepet

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

// sepet açma 
cartIcon.onclick = () => {
    cart.classList.add('active')
}

// sepet kapama
closeCart.onclick = () => {
    cart.classList.remove('active')
}

//

if (document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready);
}else {
    ready()
}


//

function ready() {
    let removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons);
    for (let i = 0; i < removeCartButtons.length; i++) {
        const button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem)
        
    }
}

function removeCartItem(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.remove();
}

// function updatetotal() {
//     let cartContent = document.getElementsByClassName('cart-content')[0];
//     let cartBoxes = document.getElementsByClassName('cart-box')
//     for (let i = 0; i < cartBoxes.length; i++)
// }