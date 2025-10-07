const cartContainer = document.getElementById('cart')
let cart = []

function loadCart() {
    cart = getCart()
    // rederizar el cart
    renderCart()
    updateCartCount()
}

function saveCart() {
    saveCartToLocalStorage(cart)
}

function renderCart() {
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class='cart-empty'>
                <h2>Tu carrito esta vacio</h2>
                <p>Agrega algunos productos a tu carrito!</p>
                <a href='index.html' class='continue-shopping'>Continuar comprando</a>
            </di>
        `
        return
    }

    loading.style.display = 'none'

    const cartHTML = `
        <section class='cart-header'>
            <h1>Carrito de compras</h1>
            <span class='cart-count'>${getTotalItemsLocal()} productos</span>
        </section>
        <section class='cart-content'>
            <div class='cart-items'>
                ${cart.map(item => `
                    <div class='cart-item' data-id='${item.id}'>
                            <img src='${item.image}' class='cart-item-image' alt='${item.title}'>
                        <div class='cart-item-details'>
                            <h3 class='cart-item-title'>${item.title}</h3>
                            <p class='cart-item-category'>${item.category}</p>
                            <p class='cart-item-price'>S/.${item.price}</p>
                        </div>     
                        <div class='cart-item-actions'>
                            <div class='cart-item-quantity'>
                                <button onclick='decreaseQuantity(${item.id})' class='quantity-btn'>-</button>
                                <span>${item.quantity}</span>
                                <button onclick='increaseQuantity(${item.id})' class='quantity-btn'>+</button>
                            </div>
                            <p class='cart-item-subtotal'>S/.${(item.price * item.quantity).toFixed(2)}</p>
                            <button class='remove-btn' onclick='removeFronCart(${item.id})'>
                                <img src='assets/trash-2.svg' class='remove-icon' alt='Eliminar'>
                            </button>
                        </div>
                    </div>     
                `).join('')}
            </div>
            <div class='cart-summary'>
                <div class='summary-content'>
                    <h2>Resumen del pedido</h2>
                    <div class='summary-line'>
                        <span>Subtotal (${getTotalItemsLocal()}) productos:</span>
                        <span>S/.${getSubtotal().toFixed(2)}</span>
                    </div>
                    <div class='summary-line'>
                        <span>Envio:</span>
                        <span>Gratis</span>
                    </div>
                    <div class='summary-line total'>
                        <span>Total: </span>
                        <span>S/.${getTotal().toFixed(2)}</span>
                    </div>
                    <button onclick='checkout()' class='checkout-btn'>Proceder al pago</button>
                    <a href='index.html' class='continue-shopping'>Continuar comprando</a>
                </div>
            </div>
        </section>
    `

    cartContainer.innerHTML = cartHTML

}

// Funcion para aumentar la cantidad de un producto
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId)
    if (item && item.quantity > 1) {
        item.quantity--
        saveCart()
        renderCart()
    }
}

// Funcion para disminuir la cantidad de un producto
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId)
    if (item) {
        item.quantity++
        saveCart()
        renderCart()
    }
}

function removeFronCart(productId) {
    cart = cart.filter(item => item.id !== productId)
    saveCart()
    renderCart()
}

function getTotalItemsLocal() {
    return cart.reduce((total, item) => total + item.quantity, 0)
}

// Funcion para obtener el subtotal
function getSubtotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
}

function getTotal() {
    return getSubtotal()
}

function checkout() {
    if (cart.length === 0) {
        alert('Tu carrito esta vacio!')
        return
    }

    alert(`Total a pagar: S/.${getTotal().toFixed(2)}\n Gracias por tu compra!`)

    cart = []
    saveCart()
    renderCart()
}

document.addEventListener('DOMContentLoaded', function () {
    loadCart()
    updateCartCount()
})