// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/Home';
import HomeScreen from './pages/Home/HomeScreen';
import StoreScreen from './pages/StoreScreen';
import LoginScreen from './pages/LoginScreen';
import ProductDetailScreen from './pages/ProductDetailScreen';
import AgregarProducto from './pages/AgregarProducto';
import EditarProducto from './pages/EditarProducto';
import Ayuda from './pages/Ayuda';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta raíz - redirige a home */}
        <Route path="/" element={<IndexPage />} />
        
        {/* Páginas principales */}
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/tienda" element={<StoreScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/ayuda" element={<Ayuda />} />
        
        {/* Rutas de productos */}
        <Route path="/product/:id" element={<ProductDetailScreen />} />
        <Route path="/agregar-producto" element={<AgregarProducto />} />
        <Route path="/editar-producto" element={<EditarProducto />} />
      </Routes>
    </Router>
  );
}