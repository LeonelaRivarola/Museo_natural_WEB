// src/pages/agregar-producto.jsx
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { getApiUrl } from '../config/api';

export default function AgregarProducto() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState(null); // archivo seleccionado
  const [guardando, setGuardando] = useState(false);

  const handleAgregar = async () => {
    if (!nombre || !precio) {
      alert("Error: El nombre y el precio son obligatorios");
      return;
    }

    setGuardando(true);

    try {
      let imagenNombre = null;

      // 1️⃣ Si hay imagen → subirla al endpoint SUBIR_IMAGEN
      if (imagen) {
        const formImg = new FormData();
        formImg.append("archivo", imagen);
        formImg.append("titulo", nombre);

        const resImg = await fetch(getApiUrl("SUBIR_IMAGEN"), {
          method: "POST",
          body: formImg,
        });

        const dataImg = await resImg.json();

        // subir_imagen_producto.php devuelve { success: true, nombreArchivo: "prod_xxx.jpg" }
        if (!dataImg || !dataImg.success) {
          alert("Error al subir la imagen");
          setGuardando(false);
          return;
        }

        imagenNombre = dataImg.nombreArchivo;
      }

      // 2️⃣ Enviar los datos del producto (form-data) al agregar_producto.php
      const formData = new FormData();
      formData.append("nombre", nombre);
      formData.append("precio", precio);
      formData.append("descripcion", descripcion);
      if (imagenNombre) formData.append("imagen", imagenNombre);
      // opcional: id_categoria, stock
      // formData.append("id_categoria", 1);
      // formData.append("stock", 0);

      const res = await fetch(getApiUrl("AGREGAR_PRODUCTO"), {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.status === 200) {
        alert("✔ Producto agregado correctamente");
        navigate(-1);
      } else {
        alert("Error: " + (data.message || "No se pudo agregar el producto"));
      }

    } catch (err) {
      console.error("❌ Error al agregar producto:", err);
      alert("Error de conexión con el servidor");
    } finally {
      setGuardando(false);
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
        style={{ ...styles.input, ...styles.textarea }}
      />

      {/* Input de imagen */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImagen(e.target.files[0])}
        style={styles.input}
      />

      <button style={styles.button} onClick={handleAgregar} disabled={guardando}>
        <span style={styles.buttonText}>{guardando ? "Guardando..." : "Guardar"}</span>
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