<template>
    <section class="cart-card">
        <div class="cart-card-image">
            <!-- <img :src="`/images/${props.product.name}.jpg`" alt="Product Image" /> -->
            <img :src="product.img" alt="food image">
        </div>
        <div class="cart-card-info">
          <div class="cart-card-info-upper">
            <div class="cart-card-info-header">
              <h3>{{ props.product.title }}</h3>
              <h3 class="cart-card-info-header-price">${{ props.product.price }}</h3>
            </div>
          </div>
          <div class="cart-card-info-lower">
            <div class="cart-card-info-lower-left">
              <div class="cart-card-info-lower-left-amtcontroller">
                <button @click="decreaseProductAmt(props.product)">-</button>
                <p>Quantity: <strong>{{ props.product.quantity }}</strong> </p>
                <button @click="increaseProductAmt(props.product)">+</button>
              </div>
            </div>
            <div class="cart-card-info-lower-right">
              <button @click="removeProduct(props.product._id)">
                <img src="/trash.svg" alt="trash icon">
              </button>  
            </div>

          </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { addCartProduct, cartKey } from '../utils.js';


const props = defineProps({
  product: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    expiration: {
      type: String,
      required: false,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  removeProduct: {
    type: Function,
    required: true,
  },
})

const emit = defineEmits(['removeProductEmit']);
const cart = ref(JSON.parse(localStorage.getItem(cartKey)));

const decreaseProductAmt = (product) => {
  const index = cart.value.findIndex((p) => p.id === product.id);
  if (index !== -1 && cart.value[index].quantity > 1) {
    cart.value[index].quantity -= 1;
    props.product.quantity -= 1;
    if (cart.value[index].quantity === 0) {
      cart.value.splice(index, 1);
    }
    localStorage.setItem(cartKey, JSON.stringify(cart.value));
  }
}

const increaseProductAmt = (product) => {
  const index = cart.value.findIndex((p) => p.id === product.id);
  if (index !== -1) {
    cart.value[index].quantity += 1;
    props.product.quantity += 1;
  }
  localStorage.setItem(cartKey, JSON.stringify(cart.value));
}

</script>

<style scoped>
.cart-card {
    display: flex;
    gap: 2rem;
    padding: 1rem;
    border-bottom: 1px solid #ccc;  
    width: 50rem;
}

.cart-card img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    border-radius: 0.5rem;
}

.cart-card-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.cart-card-info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.cart-card-info-header h3 {
    font-size: 1.5rem;
    margin-bottom: -1.5rem;
}

.cart-card-info-header-price {
  font-weight: 800;
}

.cart-card-info small {
  color: #9c9c9c;
}

.cart-card-info-lower {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -0.4rem;
    margin-bottom: -2rem;
}

.cart-card-info-lower-left {
    display: flex;
    gap: 1rem;
}

.cart-card-info-lower-right {
  scale: .2;
  margin-right: -3.4rem;
}


.cart-card-info-lower-right button {
  background-color: red;
  color: white;
  border: none;
  outline: none;
  border-radius: 1rem;
}

.cart-card-info-lower-right button:hover {
  cursor: pointer;
  background-color: #ff5858;
}

.cart-card-info-lower-right button img {
  scale: 0.8;
}

.cart-card-info-lower-left-amtcontroller {
    display: flex;
    gap: 1rem;
    background-color: #198A9A;
    border-radius: 2rem;
}

.cart-card-info-lower-left-amtcontroller button {
    background-color: #198A9A;
    color: white;
    border: none;
    outline: none;
    border-radius: 2rem;
    padding: 0 1rem;
    font-weight: 900;
    font-size: 1.25rem;
    transition: 0.2s ease all;
}

.cart-card-info-lower-left-amtcontroller button:hover {
    cursor: pointer;
    background-color: #1A97A5;
    transition: 0.2s ease all;
}

.cart-card-info-lower-left-amtcontroller p {
    font-weight: 600;
    color: white;
}

.cart-card-info-lower-left-amtcontroller p strong {
    font-weight: 800;
}
</style>