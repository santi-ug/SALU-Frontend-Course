import { API, baseURL } from './config.js';

export const getProducts = async (loading, products) => {
    try {
        loading.value = true;
        await fetch(baseURL + "/products")
            .then((res) => res.json())
            .then((data) => {
                products.value.push(...data);
            })
            .finally(() => (loading.value = false));
    } catch (error) {
        console.error(error);
    }
}

export async function updateProduct(product_id, product) {
  try {
    const response = await API.put(`/products/${product_id}`, product, null, {
        withCredentials: true,
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteProduct(id) {
  try {
    const response = await API.delete(`/products/${id}`);
    console.log("producto eliminado");
    return response.data ;
  } catch (error) {
    throw error;
  }
}

export async function createProduct (product) {
  try {
    const response = await API.post('/products', product);
    console.log("producto creado");
    return response.data;
  } catch (error) {
    throw error;
  }
}