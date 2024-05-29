import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import VueCookies from 'vue-cookies'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"
import App from './App.vue'
import router from './router.js'
 
const localstorageSetup = () => {
    const cart = localStorage.getItem('cart');
    const productList = localStorage.getItem('productList');
    if (!cart) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
    if (!productList) {
        localStorage.setItem('productList', JSON.stringify([]));
    }
    return;
}

localstorageSetup();

createApp(App)
    .use(Toast)
    .use(VueCookies)
    .use(createPinia())
    .use(router)
    .mount('#app')


