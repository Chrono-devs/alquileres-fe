import axios from 'axios';
import { handleError } from '@/utils/errorHandler';

const API_URL_NORMAL = `${import.meta.env.VITE_API_URL}/rents?query=normal`;
const API_URL_DESTACADOS = `${import.meta.env.VITE_API_URL}/rents?query=destacados`;
const API_URL_BASE = `${import.meta.env.VITE_API_URL}/rents`;

export const getAllRents = async () => {
  try {
    const response = await axios.get(API_URL_NORMAL);
    return response.data;
  } catch (error) {
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

// Obtiene rentas con parámetros (búsqueda, filtros, paginación, etc.)
// Ej: getRents({ query: 'normal', page: 1, limit: 20, q: 'palermo' })
export const getRents = async (params = {}) => {
  try {
    const response = await axios.get(API_URL_BASE, { params });
    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

