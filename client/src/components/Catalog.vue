<template>
    <Loading v-if="loading" />
    <section class="catalog" v-else>
        <h2>Catálogo</h2>
        <div class="catalog__products">
            <ul>
                <li class="catalog__product" v-for="product in products" :key="product.id">
                    <ProductCard :product="product" />
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { getProducts } from '../api/products.js';
import Loading from '../components/Loading.vue';
import ProductCard from '../components/ProductCard.vue';

const loading = ref(true);
const products = ref([]);

getProducts(loading, products);

</script>

<style scoped>
ul {
    display: grid;
    grid-template-columns: 12rem 12rem 12rem 12rem;

    gap: 4rem;
    list-style-type: none;
    text-decoration: none;
    margin-left: -2.5rem;
}

li {
    min-width: 12rem;
}

.catalog {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.catalog h2 {
    margin: 1.5rem 0;
    font-size: 3rem;
}

.catalog .catalog__searchbar {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

.catalog__searchbar {
    font-size: 1rem;
}

.catalog__searchbar input {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5rem;
    width: 35rem;
}

.catalog__searchbar input:focus {
    outline: 1px solid #198A9A;
}

.catalog__searchbar input::placeholder {
    font-size: 0.8rem;
    transform: translateX(2rem);
}

.catalog__searchbar button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 5rem;
    font-size: 1rem;
    transition: 0.2s ease all;
}

.catalog__searchbar button:hover {
    cursor: pointer;
    transition: 0.2s ease all;
    background-color: #198A9A;
    color: white;
    border: none;
}

.catalog__products {
    margin-top: 2rem;
}

</style>