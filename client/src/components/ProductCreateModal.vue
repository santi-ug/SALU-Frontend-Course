<script setup>
import { ref } from 'vue';
import { createProduct } from '../api/products.js';

const modalVisible = ref(true);
const loading = ref(false);

const props = defineProps({
    currentProducts: {
    type: Array,
    required: true,
  },
});

const inputValues = ref({
  name: "",
  price: 0,
  description: "",
  img: "https://www.yiwubazaar.com/resources/assets/images/default-product.jpg",
});

const handleChangeInput = (event) => {
  const { id, value } = event.target;
  inputValues.value = {
    ...inputValues.value,
    [id]: value,
  };
};

String.prototype.isNumber = function(){return /^\d+$/.test(this);}

const handleCreateProduct = async () => {
  const { name, price, expiration } = inputValues.value;
  if (name === "" && name.length <= 3) {
    console.log("name invalid")
    return;
} else if (price === 0 || price < 0 || !price.isNumber()) {
    console.log("price invalid")
    return;
  }

  if (!description) {
    inputValues.value.expiration = null;
  }

  if (!img) {
    inputValues.value.img = null;
  }

  createProduct(inputValues.value);
  emit('closeModal')
  emit('productChange')
};

const closeFunctions = () => {
    emit('closeModal')
}

const emit = defineEmits(['closeModal', 'productChange']);

</script>

<template>
    <section class="product" v-if="modalVisible">
        <div class="product__darkerbg"></div>
        <div class="product__card">
            <button class="exit" @click="closeFunctions">X</button>
            <img :src="inputValues.img" alt="product-image">
            <div class="product__info">
                <form action="">
                    <div class="product__info-area">
                        <label for="name">Name</label>
                        <input
                            class="product__info-area-input"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Product Name"
                            @input="(event) => handleChangeInput(event)"
                        />
                    </div>
                    <div class="product__info-area">
                        <label for="price">Price</label>
                        <input
                            class="product__info-area-input"
                            type="number"
                            id="price"
                            name="price"
                            pattern="[0-9]"
                            placeholder="Product Price"
                            @input="(event) => handleChangeInput(event)"
                        />
                    </div>
                    <div class="product__info-area">
                        <label for="description">Description</label>
                        <input
                            class=""
                            type="text"
                            id="description"
                            name="description"
                            @input="(event) => handleChangeInput(event)"
                        />
                    </div>        
                    <div class="product__info-area">
                        <label for="img">Image URL</label>
                        <input
                            class=""
                            type="text"
                            id="img"
                            name="img"
                            @input="(event) => handleChangeInput(event)"
                        />
                    </div>        
                </form>
            </div>
            <button class="create" @click="handleCreateProduct">Create</button>
        </div>
    </section>
</template>

<style scoped>
.product {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.product__darkerbg {
    position: absolute;
    width: 100%;
    height: 120%;
    background-color: rgba(0, 0, 0, 0.5);
}

.product__card {
    position: absolute;
    display: grid;
    grid-template-columns: 10rem 15rem;
    padding: 4rem 5rem;
    gap: 4rem;
    width: 30%;
    height: 43%;
    background-color: #d3d3d3;
    border-radius: 2rem;
}

.product__card .exit {
    position: absolute;
    right: 0;
    background-color: red;
    border-radius: 0;
    border-top-right-radius: 2rem;
    font-weight: 600;
}

.exit:hover {
    background-color: rgb(250, 69, 69);
    color: #d3d3d3;
    cursor: pointer;
}

img {
    width: 10rem;
}

button {
    border: none;
    border-radius: 1rem;
    padding: .2rem 1rem;
    color: white;
    font-weight: 900;
    font-size: 1rem;
    transition: 0.2s ease all;
}

button:hover {
    cursor: pointer;
    transition: 0.2s ease all;
}

.remove {
    background-color: red;
}

.remove:hover {
    background-color: rgb(250, 69, 69);
}

.add {
    background-color: rgb(32, 255, 32);
}

.add:hover {
    background-color: rgb(131, 255, 131);
}

input {
    width: 30%;
    margin: 0 1rem;
    border: none;
    border-radius: 2rem;
    padding: .3rem 1rem;
    text-align: center;
}

input[type=number] {
    -moz-appearance: textfield;
}

input:focus {
    border: none;
    outline: none;
}


h3 {
    font-size: 2rem;
    margin-bottom: -0.5rem;
}

.product__info form {
    display: flex;
    flex-direction: column;
    gap: .8rem;
}

.product__info form input {
    width: 80%;
    transform: translateX(-1rem);
}

.product__info small {
    margin: -1rem 0 2rem 0;
}

.product__info p {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem 0;
}

.create {
    background-color: #4CAF50;
    border: none;
    border-radius: 2rem;
    margin-left: -2rem;
    margin-top: -2.5rem;
    width: 300%;
    cursor: pointer;
    transition: 0.2s all ease;
    z-index: 101;
}

.create:hover {
    background-color: #62bb67;
}
</style>