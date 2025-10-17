// Manejo de errores global para servicios y componentes
export const NO_RESPONSE_MESSAGE = 'No se recibió respuesta del servidor';

export function handleError(error) {
  // Si es error de axios
  if (error.response) {
    // El servidor respondió con un status fuera del rango 2xx
    return {
      message: error.response.data?.message || 'Error en la respuesta del servidor',
      status: error.response.status,
      data: error.response.data,
    };
  } else if (error.request) {
    // La petición fue hecha pero no hubo respuesta
    return {
      message: NO_RESPONSE_MESSAGE,
      status: null,
      data: null,
    };
  } else {
    // Otro tipo de error (por ejemplo, error de código)
    return {
      message: error.message || 'Error desconocido',
      status: null,
      data: null,
    };
  }
}
