import React from "react";

export default function HorarioCard() {
  const styles = {
    container: {
      marginLeft: "20px",
      marginRight: "20px",
      padding: "20px",
      borderRadius: "14px",
      backgroundColor: "#f0e4d4",
      marginTop: "10px",
      marginBottom: "30px",
      borderLeftWidth: "6px",
      borderLeftStyle: "solid",
      borderLeftColor: "#c47719"
    },
    title: {
      fontSize: "22px",
      fontWeight: "800",
      marginBottom: "8px",
      color: "#3f3830",
      textAlign: "center",
    },
    text: {
      fontSize: "15px",
      color: "#463f37",
      marginBottom: "5px",
      textAlign: "center",
    },
    highlight: {
      fontSize: "15px",
      fontWeight: "700",
      marginTop: "10px",
      color: "#c47719",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Horarios de visita</h2>
      <p style={styles.text}>
        Lunes a Viernes: 8 a 13 hs y 14 a 19 hs
      </p>
      <p style={styles.text}>
        Sábados y Domingos: 18:00 a 20:00 hs
      </p>
      <p style={styles.highlight}>Acceso Libre y Gratuito</p>
    </div>
  );
}