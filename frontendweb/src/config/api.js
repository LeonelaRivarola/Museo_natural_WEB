// src/config/api.js
const API_CONFIG = {
  BASE_URL: "http://localhost/ProyectoFinal/backend",
  ENDPOINTS: {
    // auth
    LOGIN: "/loguin.php",                // nota: tu backend tiene loguin.php
    REGISTER: "/register.php",

    // productos
    PRODUCTOS: "/productos.php",
    PRODUCTO: "/producto.php",
    ELIMINAR_PRODUCTO: "/eliminar_producto.php",
    AGREGAR_PRODUCTO: "/agregar_producto.php",
    EDITAR_PRODUCTO: "/editar-producto.php",

    // imágenes (upload)
    SUBIR_IMAGEN: "/subir_imagen_producto.php",
    // si en el futuro agregás CRUD separado para imágenes:
    IMAGEN_CREATE: "/subir_imagen_producto.php",
    IMAGEN_UPDATE: "/imagen/update.php",
    IMAGEN_DELETE: "/imagen/delete.php"
  }
};

// Función para construir URLs completas de la API
export const getApiUrl = (endpoint) => {
  const path = API_CONFIG.ENDPOINTS[endpoint];
  if (!path) throw new Error(`Endpoint desconocido: ${endpoint}`);
  return `${API_CONFIG.BASE_URL}${path}`;
};

// Función para corregir/normalizar URLs de imágenes
export const getImageUrl = (imagePath) => {
  if (!imagePath) return "";

  let path = String(imagePath);
  // Reemplaza ::1 por localhost si aparece
  path = path.replace("::1", "localhost");

  // Si ya es una URL absoluta, devuelvo tal cual
  if (path.includes("://")) return path;

  // Si la ruta contiene /uploads/ ya (p. ej. "uploads/imagen.jpg" o "/uploads/imagen.jpg")
  if (path.includes("/uploads/")) {
    const idx = path.indexOf("/uploads/");
    const sub = path.substring(idx); // "/uploads/xxx"
    return `${API_CONFIG.BASE_URL}${sub}`;
  }

  // Si solo vino el nombre de archivo (ej: "prod_abcd.jpg")
  return `${API_CONFIG.BASE_URL}/uploads/${path}`;
};

export default API_CONFIG;