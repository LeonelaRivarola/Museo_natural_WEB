// src/pages/AgregarProducto/index.jsx
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { getApiUrl } from '../config/api';

export default function AgregarProducto() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");

  const handleAgregar = async () => {
    if (!nombre || !precio) {
      alert("Error: El nombre y el precio son obligatorios");
      return;
    }

    try {
      const res = await fetch(getApiUrl('AGREGAR_PRODUCTO'), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, precio, descripcion, imagen }),
      });

      const data = await res.json();

      if (data.status === 200) {
        alert("Éxito: Producto agregado correctamente");
        navigate(-1); // vuelve a la página anterior
      } else {
        alert("Error: " + (data.message || "No se pudo agregar el producto"));
      }
    } catch (err) {
      console.error("❌ Error al agregar producto:", err);
      alert("Error: Error al conectar con el servidor");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Agregar Producto</h1>

      <input 
        placeholder="Nombre" 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)} 
        style={styles.input} 
      />
      <input
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        type="number"
        style={styles.input}
      />
      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        style={[styles.input, styles.textarea]}
      />
      <input
        placeholder="URL de imagen (opcional)"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
        style={styles.input}
      />

      <button style={styles.button} onClick={handleAgregar}>
        <span style={styles.buttonText}>Guardar</span>
      </button>
    </div>
  );
}

const styles = {
  container: { 
    padding: 20, 
    backgroundColor: "#fff",
    maxWidth: 600,
    margin: "0 auto",
    minHeight: "100vh"
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    color: "#c47719", 
    marginBottom: 20 
  },
  input: {
    border: "1px solid #ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    width: "100%",
    fontSize: 16,
  },
  textarea: {
    height: 100,
    resize: "vertical",
  },
  button: {
    backgroundColor: "#c47719",
    padding: 15,
    borderRadius: 8,
    border: "none",
    cursor: "pointer",
    width: "100%",
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "bold" 
  },
};