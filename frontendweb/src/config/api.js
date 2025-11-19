// Configuración centralizada de la API
const API_CONFIG = {
  // Dirección base de la API - cámbiala según tu entorno
  BASE_URL: 'http://localhost',

  // Endpoints
  ENDPOINTS: {
    LOGIN: '/login.php',
    PRODUCTOS: '/productos.php',
    PRODUCTO: '/producto.php',
    ELIMINAR_PRODUCTO: '/eliminar_producto.php',
    AGREGAR_PRODUCTO: '/agregar_producto.php',
    EDITAR_PRODUCTO: '/editar_producto.php'
  }
};

// Función para construir URLs completas
export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS[endpoint]}`;
};

// Exportar configuración completa
export default API_CONFIG;
