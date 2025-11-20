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
import GaleriaScreen from "./pages/GaleriaScreen";

// Importar componentes necesarios
import Navbar from "./components/organisms/Navbar";

// Componente wrapper para páginas
const PageWrapper = ({ children }) => (
  <div className="page-container">
    {children}
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar fija para toda la app */}
      <Navbar />
      
      <Routes>
        {/* Ruta raíz - redirige a home */}
        <Route path="/" element={
          <PageWrapper>
            <Home />
          </PageWrapper>
        } />
        
        {/* Páginas principales */}
        <Route path="/home" element={
          <PageWrapper>
            <Home />
          </PageWrapper>
        } />
        <Route path="/login" element={
          <PageWrapper>
            <Login />
          </PageWrapper>
        } />
        <Route path="/tienda" element={
          <PageWrapper>
            <Tienda />
          </PageWrapper>
        } />
        <Route path="/ayuda" element={
          <PageWrapper>
            <Ayuda />
          </PageWrapper>
        } />
        
        {/* Ruta Galería */}
        <Route path="/galeria" element={
          <PageWrapper>
            <GaleriaScreen />
          </PageWrapper>
        } />
        
        {/* Rutas de productos */}
        <Route path="/producto/:id" element={
          <PageWrapper>
            <ProductDetail />
          </PageWrapper>
        } />
        <Route path="/agregar-producto" element={
          <PageWrapper>
            <AgregarProducto />
          </PageWrapper>
        } />
        <Route path="/editar-producto" element={
          <PageWrapper>
            <EditarProducto />
          </PageWrapper>
        } />
        <Route path="/modal" element={
          <PageWrapper>
            <Modal />
          </PageWrapper>
        } />

        {/* Rutas de categorías */}
        <Route path="/arqueologia" element={
          <PageWrapper>
            <div>Arqueología</div>
          </PageWrapper>
        } />
        <Route path="/herbarios" element={
          <PageWrapper>
            <div>Herbarios</div>
          </PageWrapper>
        } />
        <Route path="/zoologia" element={
          <PageWrapper>
            <div>Zoología</div>
          </PageWrapper>
        } />
        <Route path="/paleo" element={
          <PageWrapper>
            <div>Paleontología</div>
          </PageWrapper>
        } />

        {/* Ruta 404 - página no encontrada */}
        <Route path="*" element={
          <PageWrapper>
            <div>Página no encontrada</div>
          </PageWrapper>
        } />
      </Routes>
    </BrowserRouter>
  );
}