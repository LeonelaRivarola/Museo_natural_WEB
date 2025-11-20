import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/LoginScreen";
import Register from "./pages/RegisterScreen";
import Tienda from "./pages/StoreScreen";
import ProductDetail from "./pages/ProductDetailScreen";
import Ayuda from "./pages/ayuda";
import AgregarProducto from "./pages/agregar-producto";
import EditarProducto from "./pages/editar-producto";
import Modal from "./pages/modal";
import GaleriaScreen from "./pages/GaleriaScreen";

// Components
import Navbar from "./components/organisms/Navbar";

// Theme
import { ThemeProvider } from "./hooks/useTheme";

// Componente wrapper para páginas con tema
const PageWrapper = ({ children }) => (
  <div style={pageWrapperStyles}>
    {children}
  </div>
);

const pageWrapperStyles = {
  paddingTop: '70px',
  minHeight: 'calc(100vh - 70px)',
  width: '100%',
  boxSizing: 'border-box'
};

export default function App() {
  return (
    <ThemeProvider>
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
          <Route path="/registrarse" element={
            <PageWrapper>
              <Register />
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
              <div style={categoryPageStyles}>Página de Arqueología</div>
            </PageWrapper>
          } />
          <Route path="/herbarios" element={
            <PageWrapper>
              <div style={categoryPageStyles}>Página de Herbarios</div>
            </PageWrapper>
          } />
          <Route path="/zoologia" element={
            <PageWrapper>
              <div style={categoryPageStyles}>Página de Zoología</div>
            </PageWrapper>
          } />
          <Route path="/paleo" element={
            <PageWrapper>
              <div style={categoryPageStyles}>Página de Paleontología</div>
            </PageWrapper>
          } />

          {/* Ruta 404 - página no encontrada */}
          <Route path="*" element={
            <PageWrapper>
              <div style={notFoundStyles}>
                <h1>404 - Página no encontrada</h1>
                <p>La página que buscas no existe.</p>
              </div>
            </PageWrapper>
          } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const categoryPageStyles = {
  padding: '20px',
  textAlign: 'center',
  fontSize: '24px',
  fontWeight: 'bold'
};

const notFoundStyles = {
  padding: '40px 20px',
  textAlign: 'center',
  minHeight: '60vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};