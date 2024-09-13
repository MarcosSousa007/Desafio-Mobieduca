import api from '../config/api';

const authLogin = async (credentials) => {
  try {
    const response = await api.post('/api/login/run', credentials);
    console.log(response)
    return response.data; 
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

export default { authLogin };
