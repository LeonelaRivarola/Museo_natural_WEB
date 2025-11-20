import React from "react";

const novedades = [
  {
    titulo: "Visitas Educativas (mar-sep)",
    detalle: "Gran concurrencia de visitas educativas, en el Museo Provincial de Historia Natural",
    imagen: "/images/novedad1.jpg", // Cambiado a ruta estándar
  },
  {
    titulo: "Colección: Aves",
    detalle: "Preparamos 4 ejemplares para conservación osteológica; se reasignaron 18 ejemplares; etiquetamos 11 ejemplares.",
    imagen: "/images/novedad2.jpg",
  },
  {
    titulo: "Gestión de proyectos: Transformación Digital",
    detalle: "Obtuvimos financiamiento para digitalizar colecciones y publicarlas en internet. Del proyecto participan diferentes Facultades de la UNLPam.",
    imagen: "/images/novedad3.jpg",
  },
];

export default function Novedades() {
  const styles = {
    container: {
      paddingLeft: "20px",
      paddingRight: "20px",
      gap: "20px",
      marginTop: "10px",
      display: "flex",
      flexDirection: "column",
    },
    card: {
      backgroundColor: "#fff",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
    },
    image: {
      width: "100%",
      height: "180px",
      objectFit: "cover",
      display: "block",
    },
    textContainer: {
      padding: "14px",
    },
    title: {
      fontSize: "18px",
      fontWeight: "700",
      color: "#222",
      marginBottom: "6px",
      margin: "0",
    },
    detail: {
      fontSize: "14px",
      color: "#555",
      lineHeight: "20px",
      margin: "0",
    },
    button: {
      marginTop: "10px",
      marginBottom: "30px",
      backgroundColor: "#c47719",
      paddingTop: "14px",
      paddingBottom: "14px",
      borderRadius: "10px",
      textAlign: "center",
      cursor: "pointer",
      border: "none",
      width: "100%",
    },
    buttonText: {
      color: "#fff",
      fontWeight: "700",
      fontSize: "16px",
      margin: "0",
    },
  };

  return (
    <div style={styles.container}>
      {novedades.map((item, i) => (
        <div key={i} style={styles.card}>
          <img 
            src={item.imagen} 
            alt={item.titulo}
            style={styles.image}
          />
          <div style={styles.textContainer}>
            <h3 style={styles.title}>{item.titulo}</h3>
            <p style={styles.detail}>{item.detalle}</p>
          </div>
        </div>
      ))}

      {/* 🔹 Botón al final */}
      <button 
        style={styles.button} 
        onClick={() => console.log("Ver todas las novedades")}
      >
        <span style={styles.buttonText}>Ver todas</span>
      </button>
    </div>
  );
}