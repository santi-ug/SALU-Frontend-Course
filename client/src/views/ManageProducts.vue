<template>
    <Navbar />
    <Loading v-if="loading" />
    <section class="manageproducts" v-else>
        <h1>Manage Products</h1>
        <div class="manageproducts-subheading">
            <p>Here you can manage your products.</p>
            <!-- <button class="createproductbutton" @click="createProduct(loading, currentProducts)">Create Product</button> -->
            <button class="createproductbutton" @click="createProductModal">Create Product</button>
        </div>
        <ul>
            <li v-for="product in currentProducts" :key="product.id">
                <ManageProductCard :product="product" :key="product" @product-change="productChange" />
            </li>
        </ul>
    </section>
    <div class="modal-creating" v-if="creatingProduct">
        <div class="modal-bg">
            <ProductCreateModal :current-products="currentProducts" @close-modal="closeModal" @product-change="productChange" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { createProduct, fetchProducts } from '../api.js';
import { getProducts } from '../api/products.js';
import Loading from '../components/Loading.vue';
import ManageProductCard from '../components/ManageProductCard.vue';
import Navbar from '../components/Navbar.vue';
import ProductCreateModal from '../components/ProductCreateModal.vue';


const loading = ref(true);
const currentProducts = ref([]);
const creatingProduct = ref(false);

getProducts(loading, currentProducts)

const productChange = () => {
    currentProducts.value = []
    getProducts(loading, currentProducts)
}

const createProductModal = () => {
    creatingProduct.value = true;
}

const closeModal = () => {
    creatingProduct.value = false;
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

.manageproducts {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.manageproducts h1 {
    font-size: 3rem;
    margin: 2rem 0 1rem 0;
}

.manageproducts li {
    list-style-type: none;
}

.manageproducts-subheading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12rem;
}

.manageproducts-subheading p {
    margin-left: 1rem;
}

.createproductbutton {
    padding: 0.5rem 1.5rem;
    background-color: #4CAF50;
    margin: 0 0.5rem;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    color: white;
    font-weight: 600;
}

.createproductbutton:hover {
    background-color: #62bb67;
}

</style>