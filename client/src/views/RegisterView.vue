<template>
    <Navbar />
    <div class="container">
        <div class="logincard">
            <h1>Registrarme</h1>
            <form class="login">
                <label for="name">Nombre</label>
                <input type="name" id="name" name="name" v-model="userInfo.name" required>
                <label for="email">Correo Electronico</label>
                <input type="email" id="email" name="email" v-model="userInfo.email" required>
                <label for="password">Contraseña</label>
                <input type="password" id="password" name="password" v-model="userInfo.password" required>
                <button type="submit" @click="handleRegister">Registrar</button>
            </form>
            <p>Ya tienes cuenta? Inicia sesión aquí <RouterLink to="/login">Iniciar Sesión</RouterLink></p>
        </div>
    </div>
</template>
    
<script setup>
import { ref } from 'vue';
import { $cookies } from 'vue-cookies';
import { useRouter } from 'vue-router';
import { getUser, registerUser } from '../api/auth.js';
import Navbar from '../components/Navbar.vue';
import { useAuthUserStore } from '../stores/authUser.js';

const loading = ref(false);
const userInfo = ref({
    name: '',
    email: '',
    password: ''
});
const router = useRouter();

const handleRegister = (e) => {
    e.preventDefault();
    loading.value = true;
    const res = registerUser(userInfo.value, loading)
        .then(() => {
            loading.value = false;
            // router.push('/login')
        })
        .catch(() => {
            loading.value = false;
        })
}

</script>

<style scoped>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
}

.logincard {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    background-color: #ececec;
    padding: 4rem;
    border-radius: 2rem;
}

.login {
    display: flex;
    flex-direction: column;
    gap: .3rem;
    margin: 1.5rem 0;
    width: 100%;
}

.login input {
    margin-bottom: 1rem;
}


label {
    font-weight: 600;
    margin-top: -1rem;
}


button {
    padding: 0.5rem;
    border-radius: 2rem;
    border: 1px solid #ccc;
    background-color: #198A9A;
    color: white;
    font-weight: 700;
    font-size: 1.15rem;
    transition: 0.2s ease all;
}

button:hover {
    background-color: #1A97A5;
    transition: 0.2s ease all;

    cursor: pointer;
}

input {
    padding: 0.5rem;
    border-radius: 2rem;
    border: 1px solid #ccc;
}

input:focus {
    outline: none;
    border: 2px solid #198A9A;
}

a {
    color: #198A9A;
    text-decoration: none;
    transition: none;
}

a:hover {
    text-decoration: underline;
    transition: none;
    transform: translateY(0);
}

h1 {
    font-weight: 700;
}

p {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 0.3rem;
}

</style>