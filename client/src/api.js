// Products API

const baseURL = 'http://localhost:8000'

const fetchProducts = (productList, loading) => {
  try {
    loading.value = true;
    const res = fetch(baseURL + "/products")
      .then((res) => res.json())
      .then((data) => {
        productList.value.push(...data);
      })
      .finally(() => (loading.value = false));
  } catch (error) {
    console.error(error);
  }
};

const createProduct = (loading, product) => {
  try {
    loading.value = true;
    const res = fetch(baseURL + "/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .finally(() => (loading.value = false));
  } catch (error) {
    console.error(error);
  }

}

const editProduct = (product) => {
  try {
    const res = fetch(baseURL + `/products/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
  } catch (error) {
    console.error(error);
  }
}

const deleteProduct = (productIndex) => {
  try {
    const res = fetch(baseURL + `/products/${productIndex}`, {
      method: "DELETE",
    })
      .then((res) => console.log(res))
  } catch (error) {
    console.error(error);
  }
}

export {
  baseURL, createProduct, deleteProduct, editProduct, fetchProducts
};

