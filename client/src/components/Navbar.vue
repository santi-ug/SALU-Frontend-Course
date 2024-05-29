<template>
<nav class="nav">
    <div class="nav__container">
        <div class="nav__logo">
            <RouterLink to="/">
                <img src="/SALU ONLY LOGO.png" alt="logo" />
            </RouterLink>
        </div>
        <div class="nav__links">
            <ul>
                <li>
                    <RouterLink v-if="currentPath == navbarLinks[7].path" :to="navbarLinks[7].path">{{ navbarLinks[7].text }}</RouterLink>
                    <RouterLink v-else :to="navbarLinks[7].path" @click="setNewPath">{{ navbarLinks[7].text }}</RouterLink>
                </li>
                <li>
                    <RouterLink v-if="currentPath == navbarLinks[8].path" :to="navbarLinks[8].path">{{ navbarLinks[8].text }}</RouterLink>
                    <RouterLink v-else :to="navbarLinks[8].path" @click="setNewPath">{{ navbarLinks[8].text }}</RouterLink>
                </li>
                <li>
                    <RouterLink v-if="currentPath == navbarLinks[0].path" :to="navbarLinks[0].path">{{ navbarLinks[0].text }}</RouterLink>
                    <RouterLink v-else :to="navbarLinks[0].path" @click="setNewPath">{{ navbarLinks[0].text }}</RouterLink>
                </li>
                <li v-if="useAuthUser.isLoggedIn.value">
                    <RouterLink v-if="currentPath == navbarLinks[1].path" :to="navbarLinks[1].path">{{ navbarLinks[1].text }}</RouterLink>
                    <RouterLink v-else :to="navbarLinks[1].path" @click="setNewPath">{{ navbarLinks[1].text }}</RouterLink>
                </li>
                <li v-if="useAuthUser.isAdmin.value">
                    <RouterLink v-if="currentPath == navbarLinks[2].path" :to="navbarLinks[2].path">{{ navbarLinks[2].text }}</RouterLink>
                    <RouterLink v-else :to="navbarLinks[2].path" @click="setNewPath">{{ navbarLinks[2].text }}</RouterLink>
                </li>
                <li v-if="!useAuthUser.isLoggedIn.value">
                    <RouterLink v-if="currentPath == navbarLinks[3].path" :to="navbarLinks[3].path">{{ navbarLinks[3].text }}</RouterLink>
                    <RouterLink v-else :to="navbarLinks[3].path" @click="setNewPath">{{ navbarLinks[3].text }}</RouterLink>
                </li>
                <li v-if="!useAuthUser.isLoggedIn.value">
                    <RouterLink v-if="currentPath == navbarLinks[4].path" :to="navbarLinks[4].path">{{ navbarLinks[4].text }}</RouterLink>
                    <RouterLink v-else :to="navbarLinks[4].path" @click="setNewPath">{{ navbarLinks[4].text }}</RouterLink>
                </li>
                <li v-if="useAuthUser.isLoggedIn.value">
                    <RouterLink v-if="currentPath == navbarLinks[5].path" :to="navbarLinks[5].path" @click="handleLogout">{{ navbarLinks[5].text }}</RouterLink>
                    <RouterLink v-else :to="navbarLinks[5].path" @click="logoutAndPath" >{{ navbarLinks[5].text }}</RouterLink>
                </li>
                <li v-if="useAuthUser.isLoggedIn.value">
                    <RouterLink v-if="currentPath == navbarLinks[6].path" :to="navbarLinks[6].path">{{ navbarLinks[6].text }}</RouterLink>
                    <RouterLink v-else :to="navbarLinks[6].path" @click="setNewPath">{{ navbarLinks[6].text }}</RouterLink>
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

// Navbar Links
const navbarLinks = [
    { text: "Catalogo", path: "/catalogo" },
    { text: "Carrito", path: "/cart" },
    { text: "Administrar Productos", path: "/manage-products" },
    { text: "Login", path: "/login" },
    { text: "Register", path: "/register" },
    { text: "Logout", path: "/" },
    { text: "Profile", path: "/profile" },
    { text: "Misión", path: "/about" },
    { text: "Contacto", path: "/contact" }
];

const handleLogout = () => {
    useAuthUser.logout();
}

const logoutAndPath = () => {
    handleLogout();
    setNewPath("/");
}

const setNewPath = (newPath) => {
currentPath.value = newPath;
}
</script>

<style scoped>
.nav {
    background-color: #e0e0e0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.nav__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin: 0 8rem;
}

.nav__logo {
    height: 8rem;
}

.nav__logo img {
    position: relative;
    height: 8rem;
    object-fit: cover;
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
    font-size: 1.2rem;
    width: 5rem;
}

a {
    min-width: 8rem;
}
</style>