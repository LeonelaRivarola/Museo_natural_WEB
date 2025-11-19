import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function ProductDetailScreen() {
  const { id } = useParams();
  const [producto, setProducto] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://192.168.0.151/ProyectoFinal/backend/producto.php?id=${id}`)
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
      <h1 style={styles.title}>{producto.nombre}</h1>
      <span style={styles.price}>${parseFloat(producto.precio).toFixed(2)}</span>
      <p style={styles.desc}>{producto.descripcion || "Sin descripción disponible."}</p>

      <button style={styles.button}>
        <span style={styles.buttonText}>Comprar</span>
      </button>
    </div>
  );
}

const styles = {
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  container: {
    padding: 20,
    backgroundColor: "#fff",
    maxWidth: 800,
    margin: "0 auto",
  },
  image: {
    width: "100%",
    height: 400,
    borderRadius: 10,
    marginBottom: 20,
    objectFit: "cover",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 8,
  },
  price: {
    fontSize: 24,
    color: "#c47719",
    fontWeight: "600",
    marginBottom: 16,
    display: "block",
  },
  desc: {
    fontSize: 16,
    color: "#555",
    lineHeight: "24px",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#c47719",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
    fontSize: 16,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
};