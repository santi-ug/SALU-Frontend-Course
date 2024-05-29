<script setup>
import { ref } from 'vue';
import CartCard from '../components/CartCard.vue';
import Navbar from '../components/Navbar.vue';
import { cartKey, deleteCartProduct } from '../utils.js';
import { useToast } from 'vue-toastification';

const cart = ref(JSON.parse(localStorage.getItem('cart')));

const removeProduct = (index) => {
    deleteCartProduct(index, cart.value);
}

const getTotalCost = () => {
    return cart.value.reduce((acc, product) => acc + (product.price * product.quantity), 0);
};

const getTotalQuantity = () => {
    return cart.value.reduce((acc, product) => acc + product.quantity, 0);
};

const handleCheckout = () => {
    const toast = useToast();
    for (let i = 0; i < cart.value.length; i++) {
        console.log(cart.value[i])
        removeProduct(i);
    }
    location.reload();
    localStorage.setItem('cart', JSON.stringify([]));
    toast.success('Checkout successful!');
}

</script>

<template>
    <Navbar />
    <h2>Carrito</h2>
    <Loading v-if="loading" />
    <section class="cart" v-else>
        <div class="cart__products">
            <ul v-if="cart.length">
                <li v-for="product in cart" :key="product._id">
                    <CartCard :product="product" :removeProduct="removeProduct" />
                </li>
            </ul>
            <div class="cart__empty" v-else>
                <h2>Tu carrito está vacío</h2>
            </div>
        </div>
        <div class="cart__receipt">
            <h3>Total ({{ getTotalQuantity() }} items): <strong>${{ getTotalCost() }}</strong></h3>
            <button class="cart__receipt-checkout" v-if="cart.length" @click="handleCheckout">Checkout</button>
            <button class="cart__receipt-checkout-disabled" v-else >Checkout</button>
        </div>
    </section>
</template>

<style scoped>
.cart {
    display: flex;
    justify-content: space-between;
    gap: 8rem;
    padding: 0 20rem;
}

ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style-type: none;
    text-decoration: none;
}

li {
    min-width: 12rem;
}

h2 {
    display: flex;
    justify-content: center;
    margin: 1.5rem 0 1rem 0;
    font-size: 3rem;
}

.cart__products ul li:first-child {
  border-top: 1px solid #ccc;
  padding-top: 1.75rem;
}

.cart__empty {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 31.5rem;
}

.cart__empty h2 {
    font-size: 2rem;
}

.cart__receipt {
    font-size: 1.5rem;
}

.cart__receipt strong {
    font-weight: 800;
    color: #198A9A;
}

.cart__receipt-checkout {
    padding: 1rem 3rem;
    font-size: 1.5rem;
    font-weight: 800;
    background-color: #198A9A;
    color: white;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    width: 100%;
    transition: 0.3s ease all;
}

.cart__receipt-checkout:hover {
    background-color: #1A97A5;
    transition: 0.3s ease all;
}

.cart__receipt-checkout-disabled {
    padding: 1rem 3rem;
    font-size: 1.5rem;
    font-weight: 800;
    background-color: rgb(204, 204, 204);
    color: white;
    border: none;
    border-radius: 2rem;
    width: 100%;
}

</style>