import { createRouter, createWebHistory } from "vue-router";
import { useAuthUserStore } from "./stores/authUser.js";

import AboutView from "./views/AboutView.vue";
import CartView from "./views/CartView.vue";
import CatalogoView from "./views/CatalogoView.vue";
import ContactView from "./views/ContactView.vue";
import HomeView from "./views/HomeView.vue";
import LoginView from "./views/LoginView.vue";
import ManageProducts from "./views/ManageProducts.vue";
import ProfileView from "./views/ProfileView.vue";
import RegisterView from "./views/RegisterView.vue";

export function requireUnAuth(to, from, next) {
    const authUserStore = useAuthUserStore();
    if (authUserStore.isLoggedIn.value) {
      next({ name: 'Catalogo' });
    } else {
      next();
    }
  }

  export function requireAuth(to, from, next) {
    const authUserStore = useAuthUserStore();
    if (!authUserStore.isLoggedIn.value) {
      next({ name: 'Login' });
    } else {
      next();
    }
  }

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView,
        },
        {
            path: "/catalogo",
            name: "Catalogo",
            component: CatalogoView,
        },
        {
            path: "/cart",
            name: "Carrito",
            component: CartView,
            beforeEnter: requireAuth,
        },
        {
            path: "/manage-products",
            name: "ManageProducts",
            component: ManageProducts,
        },
        {
            path: "/login",
            name: "Login",
            component: LoginView,
            beforeEnter: requireUnAuth,
        },
        {
            path: "/register",
            name: "Register",
            component: RegisterView,
            beforeEnter: requireUnAuth,
        },
        {
            path: "/profile",
            name: "Profile",
            component: ProfileView,
            beforeEnter: requireAuth,
        },
        {
          path: "/about",
          name: "About",
          component: AboutView,
        },
        {
          path: "/contact",
          name: "Contact",
          component: ContactView,
        }
    ]
})

export default router;

