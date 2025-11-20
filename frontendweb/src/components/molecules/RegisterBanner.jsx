import React from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterBanner() {
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
    },
    text: {
      fontSize: "15px",
      color: "#463f37",
      marginBottom: "15px",
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
      <h2 style={styles.title}>¡Sumate a la comunidad!</h2>

      <p style={styles.text}>
        Creá tu cuenta y recibí novedades sobre eventos, talleres, actividades 
        especiales y más. ¡No te pierdas nada!
      </p>

      <div style={styles.buttonsContainer}>
        <button
          style={{...styles.button, ...styles.primary}}
          onClick={() => navigate("/registrarse")}
        >
          <span style={styles.buttonText}>Crear cuenta</span>
        </button>

        <button
          style={{...styles.button, ...styles.secondary}}
          onClick={() => navigate("/login")}
        >
          <span style={styles.buttonTextSecondary}>Iniciar sesión</span>
        </button>
      </div>
    </div>
  );
}