const API_CONFIG = {

  BASE_URL: 'http://localhost:80',

  ENDPOINTS: {
    LOGIN: '/auth/login.php',

    // Productos
    REGISTER: '/register.php', // Nuevo endpoint añadido
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

// Función para construir URLs completas de la API
export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS[endpoint]}`;
};

// Función para corregir URLs de imágenes
export const getImageUrl = (imagePath) => {
  if (!imagePath) return "";

  let path = imagePath;
  path = path.replace("::1", "localhost");

  const uploadsIndex = path.lastIndexOf("/uploads/");
  if (uploadsIndex !== -1) {
    path = path.substring(uploadsIndex);
  }

  if (path.startsWith("/uploads/")) {
    const finalUrl = `${API_CONFIG.BASE_URL}${path}`;
    return finalUrl;
  }

  if (!path.includes("://")) {
    const finalUrl = `${API_CONFIG.BASE_URL}/uploads/${path}`;
    return finalUrl;
  }

  return path;
};

export default API_CONFIG;