<template>
    <Navbar />
    <div class="container">
        <div class="profile">
            <h1>Mi Perfil</h1>
            <div class="profile-column">
                <div class="profile-info">
                    <strong>Username</strong>
                    <p>{{ useAuthUser.authUser.name }}</p>
                    <strong>Email</strong>
                    <p>{{ useAuthUser.authUser.email }}</p>
                    <strong>Role</strong>
                    <p>{{ useAuthUser.authUser.role }}</p>
                    <button>Editar Información</button>
                </div>
                <div class="profile-img">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import { useAuthUserStore } from '../stores/authUser.js';

const useAuthUser = useAuthUserStore();

</script>

<style scoped>
.profile {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    margin-top: 4rem;
}  

.profile h1 {
    margin: 2rem 0;
    font-size: 3rem;
}

.profile-info {
    width: 20rem;
    margin: 0 0 0 4rem;
}

strong {
    font-weight: 700;
    margin-top: 1rem;
}

.profile-column {
    display: flex;
}

img {
    width: 15rem;
    border-radius: 50%;
}

button {
    padding: 1rem 2rem;
    border-radius: 2rem;
    border: 1px solid #ccc;
    background-color: #198A9A;
    color: white;
    font-weight: 700;
    font-size: 1rem;
    transition: 0.2s ease all;
    margin-top: 2rem;
    transition: 0.2s ease all;
}

button:hover {
    background-color: #1A97A5;
    transition: 0.2s ease all;
    cursor: pointer;
}
</style>