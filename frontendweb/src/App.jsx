import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/LoginScreen";
import Tienda from "./pages/StoreScreen";
import ProductDetail from "./pages/ProductDetailScreen";
import Ayuda from "./pages/ayuda";
import AgregarProducto from "./pages/agregar-producto";
import EditarProducto from "./pages/editar-producto";
import Modal from "./pages/modal";

// Importar componentes necesarios
import Navbar from "./components/organisms/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar fija para toda la app */}
      <Navbar />
      
      <Routes>
        {/* Ruta raíz - redirige a home */}
        <Route path="/" element={<Home />} />
        
        {/* Páginas principales */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/ayuda" element={<Ayuda />} />
        
        {/* Rutas de productos */}
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/agregar-producto" element={<AgregarProducto />} />
        <Route path="/editar-producto" element={<EditarProducto />} />
        <Route path="/modal" element={<Modal />} />

        {/* Rutas de categorías */}
        <Route path="/arqueologia" element={<div>Arqueología</div>} />
        <Route path="/herbarios" element={<div>Herbarios</div>} />
        <Route path="/zoologia" element={<div>Zoología</div>} />
        <Route path="/paleo" element={<div>Paleontología</div>} />

        {/* Ruta 404 - página no encontrada */}
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}