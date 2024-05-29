<script setup>
import { ref } from 'vue';
import { deleteProduct } from '../api/products.js';

const modalVisible = ref(true);

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
        description: {
            type: String,
            required: true  
        },
        quantity: {
            type: Number,
            default: 1
        }
    }
});

const closeFunctions = () => {
    emit('closeModal')
}

const emit = defineEmits(['closeModal', 'deletedProduct']);

const confirmDelete = () => {
  deleteProduct(props.product.id);
  
  emit('closeModal')
  emit('deletedProduct')
};

</script>

<template>
    <section class="product" v-if="modalVisible">
        <div class="product__darkerbg"></div>
        <div class="product__card">
            <button class="exit" @click="closeFunctions">X</button>
            <img :src="product.img" alt="product-image">
            <div class="product__info">
                <h2>Are you sure you want to delete the following product?</h2>
                <h3>{{product.title}}</h3>
                <small>{{ product.description }}</small>
                <p>${{ product.price }}</p>
            </div>
            <button class="confirmDelete" @click="confirmDelete">Confirm Delete</button>
        </div>
    </section>
</template>

<style scoped>
.product {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.product__darkerbg {
    position: absolute;
    width: 100%;
    height: 120%;
    background-color: rgba(0, 0, 0, 0.5);
}

.product__card {
    position: absolute;
    display: grid;
    grid-template-columns: 10rem 15rem;
    padding: 4rem 5rem;
    gap: 4rem;
    width: 30%;
    height: 40%;
    background-color: #d3d3d3;
    border-radius: 2rem;
}

.product__card .exit {
    position: absolute;
    right: 0;
    background-color: red;
    border-radius: 0;
    border-top-right-radius: 2rem;
    font-weight: 600;
}

.exit:hover {
    background-color: rgb(250, 69, 69);
    color: #d3d3d3;
    cursor: pointer;
}

img {
    width: 10rem;
}

button {
    border: none;
    border-radius: 1rem;
    padding: .2rem 1rem;
    color: white;
    font-weight: 900;
    font-size: 1rem;
    transition: 0.2s ease all;
}

button:hover {
    cursor: pointer;
    transition: 0.2s ease all;
}

.remove {
    background-color: red;
}

.remove:hover {
    background-color: rgb(250, 69, 69);
}

.add {
    background-color: rgb(32, 255, 32);
}

.add:hover {
    background-color: rgb(131, 255, 131);
}

input {
    width: 30%;
    margin: 0 1rem;
    border: none;
    border-radius: 2rem;
    padding: .3rem 1rem;
    text-align: center;
    -moz-appearance: textfield;
}

input:focus {
    border: none;
    outline: none;
}


h3 {
    font-size: 1.5rem;
    margin-bottom: -0.5rem;
}

.product__info {
    margin-top: -0.8rem;
}

.product__info h2 {
    font-size: 1rem;
    font-weight: 700;
}

.product__info small {
    margin: -1rem 0 2rem 0;
}

.product__info p {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem 0;
}

.confirmDelete {
    background-color: red;
    border: none;
    border-radius: 2rem;
    margin-left: -2rem;
    margin-top: -2.5rem;
    width: 300%;
    cursor: pointer;
    transition: 0.2s all ease;
    z-index: 101;
}

.confirmDelete:hover {
    background-color: rgb(248, 79, 79);
}
</style>