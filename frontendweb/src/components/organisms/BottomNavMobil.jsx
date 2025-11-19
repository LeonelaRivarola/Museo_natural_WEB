import { useNavigate } from "react-router-dom";
import React from "react";

export default function BottomNavMobile({ onMenuPress }) {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <button style={styles.tab} onClick={() => navigate("/home")}>
        <span style={styles.icon}>🏠</span>
        <span style={styles.label}>Inicio</span>
      </button>

      <button style={styles.tab} onClick={() => navigate("/galeria")}>
        <span style={styles.icon}>🖼️</span>
        <span style={styles.label}>Galería</span>
      </button>

      <button style={styles.tab} onClick={() => navigate("/qr")}>
        <span style={styles.icon}>📱</span>
        <span style={styles.label}>QR</span>
      </button>

      <button style={styles.tab} onClick={() => navigate("/tienda")}>
        <span style={styles.icon}>🛍️</span>
        <span style={styles.label}>Tienda</span>
      </button>

      <button style={styles.tab} onClick={onMenuPress}>
        <span style={styles.icon}>☰</span>
        <span style={styles.label}>Más</span>
      </button>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
    borderTop: "1px solid #ddd",
  },
  tab: {
    display: "flex",
    alignItems: "center",
    border: "none",
    background: "none",
    cursor: "pointer",
    padding: 5,
  },
  icon: {
    fontSize: 24,
  },
  label: {
    fontSize: 12,
    color: "#000",
  },
};