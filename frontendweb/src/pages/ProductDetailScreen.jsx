import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getApiUrl } from "../config/api";;

export default function ProductDetailScreen() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${getApiUrl('PRODUCTO')}?id=${id}`)
      .then((res) => res.json())
      .then((data) => setProducto(data))
      .catch((err) => console.error("❌ Error al cargar producto:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div style={styles.center}>
        <span>Cargando...</span>
      </div>
    );
  }

  if (!producto) {
    return (
      <div style={styles.center}>
        <span>No se encontró el producto.</span>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <img
        src={producto.imagen || "https://via.placeholder.com/300x200?text=Sin+Imagen"}
        style={styles.image}
      />
      <span style={styles.title}>{producto.nombre}</span>
      <span style={styles.price}>${parseFloat(producto.precio).toFixed(2)}</span>
      <span style={styles.desc}>{producto.descripcion || "Sin descripción disponible."}</span>

      <button style={styles.button}>
        <span style={styles.buttonText}>Comprar</span>
      </button>
    </div>
  );
}

const styles = {
  center: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 20,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    objectFit: "cover",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: "#c47719",
    fontWeight: "600",
    marginBottom: 10,
  },
  desc: {
    fontSize: 15,
    color: "#555",
    lineHeight: "22px",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#c47719",
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    border: "none",
    cursor: "pointer",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
};