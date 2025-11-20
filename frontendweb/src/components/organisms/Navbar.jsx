import { useThemeColor } from "../../hooks/use-theme-color";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import SideMenu from "./SideMenu";
import { useColorScheme } from "../../hooks/use-color-scheme";

export default function Navbar() {
  const accentColor = useThemeColor({}, "tint");
  const [menuVisible, setMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const dropdownRef = useRef(null);

  // Usar el hook de color scheme actualizado
  const { colorScheme, toggleColorScheme } = useColorScheme();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { label: "Inicio", path: "/home" },
    { label: "Galería", path: "/galeria" },
    { label: "Tienda", path: "/tienda" },
    { label: "Ayuda", path: "/ayuda" }
  ];

  const isActiveItem = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Estilos dinámicos basados en el tema
  const getStyles = () => ({
    navbarWrapper: {
      width: "100%",
      backgroundColor: colorScheme === 'dark' ? '#2d2d2d' : '#fff',
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000,
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      maxWidth: "100vw",
      boxSizing: "border-box",
      transition: 'background-color 0.3s ease',
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
      color: colorScheme === 'dark' ? '#fff' : '#000',
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: 'color 0.3s ease',
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
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    activeLinkButton: {},
    link: {
      color: colorScheme === 'dark' ? '#fff' : '#000',
      fontSize: "16px",
      fontWeight: "500",
      whiteSpace: "nowrap",
      transition: "color 0.2s ease",
    },
    activeLink: {
      color: accentColor,
      fontWeight: "bold",
    },
    activeIndicator: {
      position: "absolute",
      bottom: "-2px",
      width: "100%",
      height: "3px",
      borderRadius: "2px",
      transition: "all 0.2s ease",
      backgroundColor: accentColor,
    },
    loginButton: {
      padding: "8px 20px",
      borderRadius: "25px",
      border: "none",
      cursor: "pointer",
      whiteSpace: "nowrap",
      backgroundColor: accentColor,
    },
    loginText: {
      color: "#fff",
      fontSize: "15px",
      fontWeight: "bold",
    },
    userDropdownContainer: {
      position: "relative",
    },
    avatarContainer: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      border: "none",
      background: "none",
      cursor: "pointer",
      padding: "8px 12px",
      borderRadius: "25px",
      transition: "background-color 0.2s ease",
    },
    avatarIcon: { 
      fontSize: "24px",
    },
    userName: { 
      color: colorScheme === 'dark' ? '#fff' : '#000', 
      fontWeight: "500",
      whiteSpace: "nowrap",
      fontSize: "14px",
      transition: 'color 0.3s ease',
    },
    dropdownArrow: {
      fontSize: "12px",
      color: colorScheme === 'dark' ? '#999' : '#666',
      marginLeft: "4px",
    },
    dropdownMenu: {
      position: "absolute",
      top: "100%",
      right: "0",
      backgroundColor: colorScheme === 'dark' ? '#2d2d2d' : '#fff',
      border: `1px solid ${colorScheme === 'dark' ? '#404040' : '#e0e0e0'}`,
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
      minWidth: "220px",
      marginTop: "8px",
      zIndex: 1001,
      overflow: "hidden",
      transition: 'background-color 0.3s ease, border-color 0.3s ease',
    },
    dropdownHeader: {
      padding: "16px 16px 12px",
      borderBottom: `1px solid ${colorScheme === 'dark' ? '#404040' : '#f0f0f0'}`,
    },
    welcomeText: {
      fontSize: "12px",
      color: colorScheme === 'dark' ? '#999' : '#666',
      display: "block",
    },
    userNameDropdown: {
      fontSize: "14px",
      fontWeight: "bold",
      color: colorScheme === 'dark' ? '#fff' : '#000',
      display: "block",
      marginTop: "2px",
    },
    themeToggleButton: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      width: "100%",
      padding: "12px 16px",
      border: "none",
      background: "none",
      cursor: "pointer",
      transition: "background-color 0.2s ease",
    },
    themeIcon: {
      fontSize: "18px",
      width: "20px",
      textAlign: "center",
    },
    themeText: {
      color: colorScheme === 'dark' ? '#fff' : '#333',
      fontWeight: "500",
      fontSize: "14px",
      flex: 1,
      textAlign: "left",
    },
    toggleSwitch: {
      width: "40px",
      height: "20px",
      backgroundColor: colorScheme === 'dark' ? '#555' : '#e0e0e0',
      borderRadius: "10px",
      position: "relative",
      transition: "background-color 0.3s ease",
    },
    toggleSwitchActive: {
      backgroundColor: accentColor,
    },
    toggleKnob: {
      width: "16px",
      height: "16px",
      backgroundColor: "#fff",
      borderRadius: "50%",
      position: "absolute",
      top: "2px",
      left: "2px",
      transition: "transform 0.3s ease",
    },
    toggleKnobActive: {
      transform: "translateX(20px)",
    },
    dropdownDivider: {
      height: "1px",
      backgroundColor: colorScheme === 'dark' ? '#404040' : '#f0f0f0',
    },
    logoutButton: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      width: "100%",
      padding: "14px 16px",
      border: "none",
      background: "none",
      cursor: "pointer",
      transition: "background-color 0.2s ease",
    },
    logoutIcon: {
      fontSize: "16px",
    },
    logoutText: {
      color: "#dc2626",
      fontWeight: "600",
      fontSize: "14px",
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
      backgroundColor: colorScheme === 'dark' ? '#fff' : '#000',
      borderRadius: "2px",
      transition: 'background-color 0.3s ease',
    },
  });

  const styles = getStyles();

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
                {navItems.map((item) => {
                  const isActive = isActiveItem(item.path);
                  return (
                    <button 
                      key={item.path}
                      style={{ 
                        ...styles.linkButton,
                        ...(isActive && styles.activeLinkButton)
                      }} 
                      onClick={() => navigate(item.path)}
                    >
                      <span style={{
                        ...styles.link,
                        ...(isActive && styles.activeLink)
                      }}>{item.label}</span>
                      {isActive && <div style={styles.activeIndicator} />}
                    </button>
                  );
                })}
              </div>

              {user ? (
                <div style={styles.userDropdownContainer} ref={dropdownRef}>
                  <button 
                    style={styles.avatarContainer} 
                    onClick={toggleDropdown}
                  >
                    <span style={{ ...styles.avatarIcon, color: accentColor }}>👤</span>
                    <span style={styles.userName}>{user.nombre}</span>
                    <span style={styles.dropdownArrow}>
                      {dropdownVisible ? '▲' : '▼'}
                    </span>
                  </button>
                  
                  {dropdownVisible && (
                    <div style={styles.dropdownMenu}>
                      <div style={styles.dropdownHeader}>
                        <span style={styles.welcomeText}>Hola,</span>
                        <span style={styles.userNameDropdown}>{user.nombre}</span>
                      </div>
                      
                      {/* Toggle de Tema */}
                      <button 
                        style={styles.themeToggleButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleColorScheme();
                        }}
                      >
                        <span style={styles.themeIcon}>
                          {colorScheme === 'dark' ? '🌙' : '☀️'}
                        </span>
                        <span style={styles.themeText}>
                          {colorScheme === 'dark' ? 'Tema' : 'Tema'}
                        </span>
                        <div style={{
                          ...styles.toggleSwitch,
                          ...(colorScheme === 'dark' && styles.toggleSwitchActive)
                        }}>
                          <div style={{
                            ...styles.toggleKnob,
                            ...(colorScheme === 'dark' && styles.toggleKnobActive)
                          }} />
                        </div>
                      </button>

                      <div style={styles.dropdownDivider}></div>
                      
                      <button 
                        style={styles.logoutButton}
                        onClick={handleLogout}
                      >
                        <span style={styles.logoutIcon}></span>
                        <span style={styles.logoutText}>Cerrar sesión</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  style={styles.loginButton}
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
          currentPath={location.pathname}
          colorScheme={colorScheme}
          onToggleColorScheme={toggleColorScheme}
        />
      )}
    </div>
  );
}