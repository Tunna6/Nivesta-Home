document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cart = document.getElementById('cart');
    const total = document.getElementById('total');
    const clearCartButton = document.getElementById('clear-cart');

    let cartItems = [];

    // Sepete ürün ekleme
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    // Sepete ürün ekleme fonksiyonu
    function addToCart(event) {
        const button = event.target;
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);

        const item = {
            name: name,
            price: price
        };

        cartItems.push(item);
        showCart();
    }

    // Sepeti gösterme
    function showCart() {
        cart.innerHTML = '';
        let totalPrice = 0;

        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerText = `${item.name}: $${item.price}`;
            listItem.classList.add('list-group-item');
            cart.appendChild(listItem);

            totalPrice += item.price;
        });

        total.innerText = `Toplam: $${totalPrice.toFixed(2)}`;
    }

    // Sepeti temizleme
    clearCartButton.addEventListener('click', () => {
        cartItems = [];
        showCart();
    });
});
