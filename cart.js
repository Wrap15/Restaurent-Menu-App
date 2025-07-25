const cartItemsContainer = document.querySelector('.cart-items');
const cartItems = localStorage.getItem('cart') ? 
    JSON.parse(localStorage.getItem('cart')) : [];

const orderButton = document.getElementById('order-button');
if (!cartItems || cartItems.length === 0) {
    orderButton.classList.add('disabled');
} else {
    orderButton.classList.remove('disabled');
}

// Render each cart item
for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];

    // Convert "₹40" → 40
    const numericPrice = Number(item.price.replace(/[^0-9.]/g, ''));
    const totalPrice = numericPrice * item.quantity;

    cartItemsContainer.innerHTML += `
        <div id="product-${item.id}" class="menu-item">
            <img src="${item.image}" alt="${item.title}" class="menu-item-image">
            <div class="menu-item-details">
                <h1>${item.title}</h1>
                <span>${item.description}</span>
                <span class="price">Total Price: ₹${totalPrice}</span>
                <span>Quantity: ${item.quantity}</span>
                <button id="button-${item.id}" class="remove-from-cart hidden">Remove from Cart</button>
            </div>
        </div>
    `;
}

// Show fallback if cart is empty
if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = '<h1>No items in cart</h1>';
}

// Add remove button functionality
const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
for (let i = 0; i < removeFromCartButtons.length; i++) {
    removeFromCartButtons[i].addEventListener('click', function () {
        const productId = parseInt(removeFromCartButtons[i].id.split('-')[1]);

        // Update cart: reduce quantity or remove item
        const updatedCart = cartItems.map(item => {
            if (item.id === productId) {
                item.quantity = Math.max(item.quantity - 1, 0);
            }
            return item;
        }).filter(item => item.quantity > 0);

        localStorage.setItem('cart', JSON.stringify(updatedCart));
        location.reload();
    });
}

// Handle Order button click
orderButton.addEventListener('click', function () {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart || cart.length === 0) return;

    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(cart);

    localStorage.setItem('order', JSON.stringify(orders));
    alert("Order placed successfully");
    localStorage.removeItem('cart');
    location.assign('./order.html');
});
