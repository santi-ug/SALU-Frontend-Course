<template>
    <Navbar />
    <div class="container">
        <div class="logincard">
            <h1>Ingresa a tu cuenta</h1>
            <form class="login">
                <label for="email">Correo Electronico</label>
                <input type="email" id="email" name="email" v-model="userInfo.email" required>
                <label for="password">Contraseña</label>
                <input type="password" id="password" name="password" v-model="userInfo.password" required>
                <button type="submit" @click="handleLogin">Login</button>
            </form>
            <p>No te has registrado? <RouterLink to="/register">Registrarme</RouterLink></p>
        </div>
    </div>
</template>
    
<script setup>
import { ref } from 'vue';
import { $cookies } from 'vue-cookies';
import { useRouter } from 'vue-router';
import { getUser, loginUser } from '../api/auth.js';
import Navbar from '../components/Navbar.vue';
import { useAuthUserStore } from '../stores/authUser.js';

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
const router = useRouter();
const useAuthUser = useAuthUserStore();


const loading = ref(false);
const userInfo = ref({
    email: '',
    password: ''
});
const user = ref(null);

const handleLogin = (e) => {
    e.preventDefault();
    // $cookies.remove('token');  
    loading.value = true;
    
    // Check if email or password is invalid
    // if (!PASSWORD_REGEX.test(userInfo.value.password) || !EMAIL_REGEX.test(userInfo.value.email)) {
    //     loading.value = false
    //     return
    // }
    
    // Login
    loginUser(userInfo.value, loading)
        .then(() => {
            loading.value = false;
            // const token = this.$cookies.get('token');
            // if (token != null) {
                const user = getUser()
                user.then((data) => {
                    useAuthUser.setUser(data)
                    router.push('/catalogo')
                })
            }
        )
        .catch((error) => { 
            console.error(error);
        });
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