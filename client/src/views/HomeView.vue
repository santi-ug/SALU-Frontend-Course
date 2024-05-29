<template>
    <nav class="nav">
        <div class="nav__container">
            <div class="nav__logo">
                <RouterLink to="/">
                    <img src="../../SALU ONLY LOGO.png" alt="logo" />
                    <h1>SALU</h1>
                </RouterLink>
            </div>
            <div class="nav__links">
                <ul>
                    <li>
                        <RouterLink v-if="currentPath == navLinks[0].path" :to="navLinks[0].path">{{ navLinks[0].text }}</RouterLink>
                        <RouterLink v-else :to="navLinks[0].path" @click="setNewPath">{{ navLinks[0].text }}</RouterLink>
                    </li>
                    <li v-if="!useAuthUser.isLoggedIn.value">
                        <RouterLink v-if="currentPath == navLinks[1].path" :to="navLinks[1].path">{{ navLinks[1].text }}</RouterLink>
                        <RouterLink v-else :to="navLinks[1].path" @click="setNewPath">{{ navLinks[1].text }}</RouterLink>
                    </li>
                    <li v-if="!useAuthUser.isLoggedIn.value">
                        <RouterLink v-if="currentPath == navLinks[2].path" :to="navLinks[2].path">{{ navLinks[2].text }}</RouterLink>
                        <RouterLink v-else :to="navLinks[2].path" @click="setNewPath">{{ navLinks[2].text }}</RouterLink>
                    </li>
                    <li v-if="useAuthUser.isLoggedIn.value">
                        <RouterLink v-if="currentPath == navLinks[3].path" :to="navLinks[3].path">{{ navLinks[3].text }}</RouterLink>
                        <RouterLink v-else :to="navLinks[3].path" @click="setNewPath">{{ navLinks[3].text }}</RouterLink>
                    </li>
                    <li v-if="useAuthUser.isAdmin.value">
                        <RouterLink v-if="currentPath == navLinks[4].path" :to="navLinks[4].path">{{ navLinks[4].text }}</RouterLink>
                        <RouterLink v-else :to="navLinks[4].path" @click="setNewPath">{{ navLinks[4].text }}</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </template>
    
    
<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useAuthUserStore } from '../stores/authUser.js';

const currentPath = ref(window.location.pathname);
const useAuthUser = useAuthUserStore();

const navLinks = [
    { text: 'Catálogo', path: '/catalogo' },
    { text: 'Iniciar Sesion', path: '/login' },
    { text: 'Registrarme', path: '/register' },
    { text: 'Carrito', path: '/cart' },
    { text: 'Administrar Productos', path: '/manage-products'}
]

const setNewPath = (newPath) => {
currentPath.value = newPath;
}
</script>
    
<style scoped>
    .nav {
        background-color: #e0e0e0;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .nav__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        margin: 0 8rem;
    }
    
    img {
        width: 102%;
    }
    
    ul {
        display: flex;
        align-items: center;
        gap: 4rem;
        list-style-type: none;
        text-decoration: none;
        width: 100%;
    }
    
    li {
        padding: 0 2rem;
        font-size: 1.5rem;
    }
    
    a {
        min-width: 8rem;
        display: flex;
        align-items: center;
    }

    a > h1 {
        font-size: 7rem;
        transform: translateX(-5rem);
        color: #198A9A;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    
    li:nth-child(2) {
        margin-left: -2rem;
    }
</style>