// Configuración centralizada de la API
const API_CONFIG = {
  BASE_URL: 'http://localhost/ProyectoFinal/backend',

  ENDPOINTS: {
    LOGIN: '/auth/login.php',

    // Productos
    PRODUCTOS: '/productos.php',
    PRODUCTO: '/producto.php',
    ELIMINAR_PRODUCTO: '/eliminar_producto.php',
    AGREGAR_PRODUCTO: '/agregar_producto.php',
    EDITAR_PRODUCTO: '/editar_producto.php',

    // 📌 CRUD IMÁGENES (Nuevos)
    IMAGEN_CREATE: '/imagen/create.php',
    IMAGEN_UPDATE: '/imagen/update.php',
    IMAGEN_DELETE: '/imagen/delete.php'
  }
};

// Función para construir URLs completas
export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS[endpoint]}`;
};

export default API_CONFIG;