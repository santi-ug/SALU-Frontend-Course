<template>
    <div class="manageproductcard" v-if="render">
        <div class="manageproductcard-info">
            <img :src="product.img" alt="product image" />
            <div class="manageproductcard-info-details">
                <h3>{{ product.title }}</h3>
                <p>${{ product.price }}</p>
            </div>
            <div class="manageproductcard-info-buttons">
                <button @click="editProductModal()">Edit</button>
                <button @click="deleteProductModal()">Delete</button>
            </div>
        </div>
    </div>
    <div class="modals">
        <div class="modals-editing" v-if="editingProduct">
            <div class="modals-bg">
                <ProductEditModal :product="product" @close-modal="closeModal" @edited-product="editedProduct" />
            </div>
        </div>
        <div class="modals-deleting" v-if="deletingProduct">
            <div class="modals-bg">
                <ProductDeleteModal :product="product" @close-modal="closeModal" @deleted-product="deletedProduct" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { deleteProduct, editProduct, fetchProducts } from '../api.js';
import ProductDeleteModal from './ProductDeleteModal.vue';
import ProductEditModal from './ProductEditModal.vue';

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
    },
});

const emit = defineEmits(['productChange'])

const editingProduct = ref(false);
const deletingProduct = ref(false);
const render = ref(true);

const editProductModal = () => {
    editingProduct.value = ref(true);
}

const deleteProductModal = () => {
    deletingProduct.value = ref(true);
}

const closeModal = () => {
    deletingProduct.value = false;
    editingProduct.value = false;
}

const editedProduct = async () => {
    emit('productChange')
}

const deletedProduct = async () => {
    emit('productChange')
}

</script>

<style scoped>
.modals-bg {
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

.manageproductcard {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    padding: 1rem 2rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 40rem;
}

.manageproductcard-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.manageproductcard-info > img {
    width: 3rem;
}

.manageproductcard-info-details {
    display: grid;
    grid-template-columns: 6rem 6rem;
    align-items: left;
    gap: 2rem;
}

.manageproductcard-info-details p {
    padding-top: 0.2rem;
    font-weight: 700;
}

/* Buttons */
.manageproductcard-info-buttons button {
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    color: white;
    font-weight: 600;
}

.manageproductcard-info-buttons button:nth-child(1) {
    background-color: #e0a840;
}

.manageproductcard-info-buttons button:nth-child(1):hover {
    background-color: #ecba5c;
}

.manageproductcard-info-buttons button:nth-child(2) {
    background-color: #f44336;
}

.manageproductcard-info-buttons button:nth-child(2):hover {
    background-color: #ff6257;
}

</style>