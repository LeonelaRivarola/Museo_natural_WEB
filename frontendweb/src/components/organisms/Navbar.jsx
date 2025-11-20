import { useThemeColor } from "../../hooks/use-theme-color";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SideMenu from "./SideMenu";

export default function Navbar() {
  const accentColor = useThemeColor({}, "tint");
  const [menuVisible, setMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mapeo correcto de rutas
  const navItems = [
    { label: "Inicio", path: "/home" },
    { label: "Galería", path: "/galeria" },
    { label: "Tienda", path: "/tienda" },
    { label: "Ayuda", path: "/ayuda" }
  ];

  return (
    <div style={styles.navbarWrapper}>
      <div style={styles.navbar}>
        {/* IZQUIERDA */}
        <div style={styles.leftContainer}>
          <button style={styles.logoButton} onClick={() => navigate("/home")}>
            <img 
              src="/images/logo-sinfondo.png" 
              style={styles.logo} 
              alt="Museo Natural"
            />
          </button>
          <span style={styles.title}>Museo Natural</span>
        </div>

        {/* DERECHA */}
        <div style={styles.rightContainer}>
          {!isMobile && (
            <>
              <div style={styles.navLinks}>
                {navItems.map((item) => (
                  <button 
                    key={item.path}
                    style={styles.linkButton} 
                    onClick={() => navigate(item.path)}
                  >
                    <span style={styles.link}>{item.label}</span>
                  </button>
                ))}
              </div>

              {user ? (
                <button style={styles.avatarContainer} onClick={logout}>
                  <span style={{ ...styles.avatarIcon, color: accentColor }}>👤</span>
                  <span style={styles.userName}>{user.nombre}</span>
                </button>
              ) : (
                <button
                  style={{ ...styles.loginButton, backgroundColor: accentColor }}
                  onClick={() => navigate("/login")}
                >
                  <span style={styles.loginText}>Iniciar sesión</span>
                </button>
              )}
            </>
          )}

          {isMobile && (
            <button 
              onClick={() => setMenuVisible(true)} 
              style={styles.hamburgerButton}
            >
              <div style={styles.hamburgerLine}></div>
              <div style={styles.hamburgerLine}></div>
              <div style={styles.hamburgerLine}></div>
            </button>
          )}
        </div>
      </div>

      {isMobile && (
        <SideMenu
          visible={menuVisible}
          onClose={() => setMenuVisible(false)}
          user={user}
          onLogout={logout}
          accentColor={accentColor}
        />
      )}
    </div>
  );
}

const styles = {
  navbarWrapper: {
    width: "100%",
    backgroundColor: "#fff",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    maxWidth: "100vw",
    boxSizing: "border-box",
  },
  navbar: {
    width: "100%",
    padding: "8px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  leftContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexShrink: 1,
    minWidth: 0,
  },
  logoButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    padding: "4px",
    flexShrink: 0,
  },
  logo: {
    width: "60px",
    height: "auto",
    maxHeight: "40px",
    objectFit: "contain",
  },
  title: {
    fontSize: "clamp(16px, 4vw, 23px)",
    fontWeight: "bold",
    color: "#000",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  rightContainer: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    flexShrink: 0,
  },
  navLinks: {
    display: "flex",
    gap: "20px",
  },
  linkButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    padding: "8px 4px",
  },
  link: {
    color: "#000",
    fontSize: "16px",
    fontWeight: "500",
    whiteSpace: "nowrap",
  },
  loginButton: {
    padding: "8px 20px",
    borderRadius: "25px",
    border: "none",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  loginText: {
    color: "#fff",
    fontSize: "15px",
    fontWeight: "bold",
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    border: "none",
    background: "none",
    cursor: "pointer",
    padding: "4px 8px",
  },
  avatarIcon: { 
    fontSize: "28px",
  },
  userName: { 
    color: "#000", 
    fontWeight: "500",
    whiteSpace: "nowrap",
  },
  hamburgerButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "28px",
    height: "22px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "0",
  },
  hamburgerLine: {
    width: "100%",
    height: "3px",
    backgroundColor: "#000",
    borderRadius: "2px",
  },
};