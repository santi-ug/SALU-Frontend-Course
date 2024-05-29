<template>
    <div class="card">
        <img :src="product.img" alt="food img">
        <div class="card__info">
            <h3>{{ product.title }}</h3>
            <p>${{ product.price }}</p>
        </div>
        <button class="card__add-to-cart" @click="addToCart">Add to Cart</button>
    </div>
    <div class="modal" v-if="addingToCart">
        <div class="modal-bg" >
            <ProductModal :product="product" @close-modal="closeModal" />
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import ProductModal from '../components/ProductModal.vue';

const props = defineProps({
    product: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        expiration: {
            type: String, 
            default: null
        },
        img: {
            type: String,
            default: "../assets/food.png"
        },
        quantity: {
            type: Number,
            default: 1
        }
    }
});

const addingToCart = ref(false);

const addToCart = () => {
    addingToCart.value = true;
    props.product.quantity = 1;
}

const closeModal = () => {
    addingToCart.value = false;
}

</script>


<style scoped>
.modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}

.card img {
    width: 8rem;
}

.card,
.card__info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card__info {
    margin-top: 1rem;
}

.card__info h3 {
    font-weight: 600;
}

.card__info p {
    color: #198A9A;
    font-weight: 800;
    font-family: 'Roboto', sans-serif;
    letter-spacing: .025rem;
    font-size: 1rem;
}

.card__add-to-cart {
    background-color: #198A9A;
    color: #fff;
    border: none;
    border-radius: 1rem;
    padding: .6rem .5rem;
    margin-top: .5rem;
    width: 60%;
    cursor: pointer;
    transition: 0.2s all ease;
}

.card__add-to-cart:hover {
    transform: scale(1.1);
}
</style>