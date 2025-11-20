import React from "react";
import { useNavigate } from "react-router-dom";

export default function VisitBanner() {
  const navigate = useNavigate();

  const styles = {
    container: {
      marginLeft: "20px",
      marginRight: "20px",
      padding: "20px",
      backgroundColor: "#f0e4d4",
      borderRadius: "14px",
      marginTop: "10px",
      marginBottom: "30px",
      borderLeftWidth: "6px",
      borderLeftStyle: "solid",
      borderLeftColor: "#c47719",
    },
    title: {
      fontSize: "22px",
      fontWeight: "800",
      color: "#3f3830",
      marginBottom: "8px",
      margin: "0",
    },
    text: {
      fontSize: "15px",
      color: "#463f37",
      marginBottom: "15px",
      margin: "0",
    },
    buttonsContainer: {
      display: "flex",
      flexDirection: "row",
      gap: "10px",
    },
    button: {
      flex: "1",
      paddingTop: "12px",
      paddingBottom: "12px",
      borderRadius: "10px",
      textAlign: "center",
      cursor: "pointer",
      border: "none",
    },
    primary: {
      backgroundColor: "#c47719",
    },
    secondary: {
      border: "2px solid #c47719",
      backgroundColor: "transparent",
    },
    buttonText: {
      color: "#fff",
      fontWeight: "700",
      fontSize: "15px",
      margin: "0",
    },
    buttonTextSecondary: {
      color: "#c47719",
      fontWeight: "700",
      fontSize: "15px",
      margin: "0",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>¿Querés visitarnos?</h2>

      <p style={styles.text}>
        Podés venir en nuestros horarios abiertos al público o coordinar una 
        visita guiada para escuelas, grupos o turistas.
      </p>

      <div style={styles.buttonsContainer}>
        <button
          style={{...styles.button, ...styles.primary}}
          onClick={() => navigate("/visitas")}
        >
          <span style={styles.buttonText}>Agendar visita</span>
        </button>
      </div>
    </div>
  );
}