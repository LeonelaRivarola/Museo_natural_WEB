import { useThemeColor } from "../../hooks/use-theme-color";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import SideMenu from "./SideMenu";

export default function NavbarWeb() {
  const accentColor = useThemeColor({}, "tint");
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <div style={styles.navbarWrapper}>
      <div style={styles.navbar}>
        <div style={styles.leftContainer}>
          <button style={styles.logoButton} onClick={() => navigate("/home")}>
            <img
              src="/images/logo-sinfondo.png"
              style={styles.logo}
            />
          </button>
          <span style={styles.title}>Museo Natural</span>
        </div>

        <div style={styles.rightContainer}>
          <div style={styles.navLinks}>
            <button style={styles.linkButton} onClick={() => navigate("/home")}>
              <span style={styles.link}>Inicio</span>
            </button>

            <button style={styles.linkButton} onClick={() => navigate("/galeria")}>
              <span style={styles.link}>Galería</span>
            </button>

            <button style={styles.linkButton} onClick={() => navigate("/tienda")}>
              <span style={styles.link}>Tienda</span>
            </button>

            <button style={styles.linkButton} onClick={() => navigate("/ayuda")}>
              <span style={styles.link}>Ayuda</span>
            </button>
          </div>

          {user ? (
            <button style={styles.avatarContainer} onClick={logout}>
              <span style={{...styles.avatarIcon, color: accentColor}}>👤</span>
              <span style={styles.userName}>{user.nombre}</span>
            </button>
          ) : (
            <button
              style={{...styles.loginButton, backgroundColor: accentColor}}
              onClick={() => navigate("/login")}
            >
              <span style={styles.loginText}>Iniciar sesión</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  navbarWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 100,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  navbar: {
    width: "90%",
    maxWidth: 1200,
    paddingTop: 8,
    paddingBottom: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logoButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    padding: 0,
  },
  logo: {
    width: 90,
    height: 55,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#000",
  },
  rightContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },
  navLinks: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  linkButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    padding: 0,
  },
  link: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
  },
  loginButton: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 22,
    paddingRight: 22,
    borderRadius: 25,
    border: "none",
    cursor: "pointer",
  },
  loginText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  avatarContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    border: "none",
    background: "none",
    cursor: "pointer",
    padding: 0,
  },
  avatarIcon: {
    fontSize: 32,
  },
  userName: {
    color: "#000",
    fontWeight: "500",
  },
};