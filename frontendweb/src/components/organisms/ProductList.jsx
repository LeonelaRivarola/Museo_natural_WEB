import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProductCard from "../molecules/ProductCard";
import { getApiUrl } from '../../config/api';

export default function ProductList() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rol, setRol] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarRol = async () => {
      const savedRol = localStorage.getItem("rol");
      setRol(savedRol ? parseInt(savedRol) : null);
    };
    cargarRol();

    fetch(getApiUrl('PRODUCTOS'))
      .then((res) => res.json())
      .then((data) => {
        console.log("📦 Productos recibidos:", data);
        setProductos(data);
      })
      .catch((err) => {
        console.error("❌ Error al cargar productos:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  const eliminarProducto = async (id) => {
    try {
      const res = await fetch(`${getApiUrl('ELIMINAR_PRODUCTO')}?id=${id}`,
        { method: "DELETE" }
      );
      if (res.ok) {
        setProductos(productos.filter((p) => p.id !== id));
      }
    } catch (err) {
      console.error("❌ Error al eliminar:", err);
    }
  };

  if (loading) {
    return (
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <span>Cargando...</span>
      </div>
    );
  }

  if (productos.length === 0) {
    return (
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <span>No hay productos disponibles.</span>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {rol === 1 && (
        <button
          style={styles.addButton}
          onClick={() => navigate("/agregar-producto")}
        >
          <span style={styles.addIcon}>➕</span>
          <span style={styles.addText}>Agregar producto</span>
        </button>
      )}

      <div style={styles.productGrid}>
        {productos.map((item) => (
          <ProductCard
            key={item.id_producto}
            item={item}
            isAdmin={rol === 1}
            onEdit={() => navigate(`/editar-producto?id=${item.id_producto}`)}
            onDelete={() => eliminarProducto(item.id_producto)}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  addButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c47719",
    margin: 10,
    padding: 10,
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
  },
  addIcon: {
    fontSize: 22,
    color: "#fff",
  },
  addText: {
    color: "#fff",
    marginLeft: 5,
    fontWeight: "bold",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "25px",
    paddingBottom: 60,
  },
};