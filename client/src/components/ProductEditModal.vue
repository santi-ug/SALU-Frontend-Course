<script setup>
import { ref } from 'vue';
import { editProduct } from '../api.js';
import { updateProduct } from '../api/products.js';
import { addCartProduct, cartKey } from '../utils.js';

const modalVisible = ref(true);

const props = defineProps({
    product: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            default: null
        },
        expiration: {
            type: String, 
            default: null
        },
        img: {
            type: String,
        },
        quantity: {
            type: Number,
            default: 1
        }
    }
});

const closeFunctions = () => {
    emit('closeModal')
}

const emit = defineEmits(['closeModal', 'editedProduct']);

const inputValues = ref({
  name: props.product.title,
  price: props.product.price,
  description: props.product.description,
  img: props.product.img,
});

const handleChangeInput = (event) => {
  const { id, value } = event.target;
  inputValues.value = {
    ...inputValues.value,
    [id]: value,
  };
};

const handleEditProduct = () => {
  const { name, price } = inputValues.value;
  if (name === "" || name.length <= 3) {
    return;
  } else if (price === 0 || price < 0) {
    return;
  } else if (inputValues.value.img === "") {
    return;
  } else if (inputValues.value.description === "") {
    return;
  }

  inputValues.value.id = props.product.id;
  updateProduct(inputValues.value.id, inputValues.value)

  emit('closeModal')
  emit('editedProduct')
};

</script>

<template>
    <section class="product" v-if="modalVisible">
        <div class="product__darkerbg"></div>
        <div class="product__card">
            <button class="exit" @click="closeFunctions">X</button>
            <img :src="product.img" alt="product-image">
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
                            v-model.lazy="inputValues.name"
                        />
                    </div>
                    <div class="product__info-area">
                        <label for="price">Price</label>
                        <input
                            class="product__info-area-input"
                            type="number"
                            id="price"
                            name="price"
                            placeholder="Precio del inputValueso"
                            @input="(event) => handleChangeInput(event)"
                            v-model.lazy="inputValues.price"
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
                            v-model.lazy="inputValues.description"
                        />
                    </div>        
                    <div class="product__info-area">
                        <label for="image">Image URL</label>
                        <input
                            class=""
                            type="text"
                            id="image"
                            name="image"
                            @input="(event) => handleChangeInput(event)"
                            v-model.lazy="inputValues.img"
                        />
                    </div>        
                </form>
            </div>
            <button class="confirm__edits" @click="handleEditProduct">Confirm</button>
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

.confirm__edits {
    background-color: #7c64ff;
    border: none;
    border-radius: 2rem;
    margin-left: -2rem;
    margin-top: -2.5rem;
    width: 300%;
    cursor: pointer;
    transition: 0.2s all ease;
    z-index: 101;
}

.confirm__edits:hover {
    background-color: rgb(131, 131, 255);
}
</style>