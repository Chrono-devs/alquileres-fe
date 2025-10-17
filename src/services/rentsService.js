import axios from 'axios';
import { handleError } from '@/utils/errorHandler';

const API_URL_NORMAL = `${import.meta.env.VITE_API_URL}/rents?query=normal`;
const API_URL_DESTACADOS = `${import.meta.env.VITE_API_URL}/rents?query=destacados`;

export const getAllRents = async () => {
  try {
    const response = await axios.get(API_URL_NORMAL);
    return response.data;
  } catch (error) {
    // Manejo de errores global
    return handleError(error);
  }
};

export const getAllRentsDestacados = async () => {
  try {
    const response = await axios.get(API_URL_DESTACADOS);
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

