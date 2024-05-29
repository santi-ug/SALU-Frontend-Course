import { API, baseURL } from './config.js';

export const registerUser = async (newUser, loading) => {
  try {
    loading.value = true;
    const response = await API.post('/auth/register', newUser)
      .finally(() => {
        loading.value = false
      });
    return response.data;
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      throw new Error(`Error registrando usuario: ${status} - ${data.message}`);
    } else {
      throw new Error('Error de conexión al servidor');
    }
  }
};

export const loginUser = async (authUser, loading) => {
    try {
      loading.value = true;
      const response = await API.post('/auth/login', authUser).finally(() => {
        loading.value = false
        // 
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        throw new Error(`Error iniciando la sesión del usuario: ${status} - ${data.message}`);
      } else {
        throw new Error('Error de conexión al servidor');
      }
    }
}

export const getUser = async () => {
  try {
    const response = await API.post('/auth/profile', null, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      throw new Error(`Error obteniendo usuario: ${status} - ${data.message}`);
    } else {
      throw new Error('Error de conexión al servidor');
    }
  }
}