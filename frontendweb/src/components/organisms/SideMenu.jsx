import { useThemeColor } from "../../hooks/use-theme-color";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";

const MenuItem = ({
  label,
  iconName,
  onPress,
  highlight,
  isActive,
  isLogout = false,
  colorScheme,
  accentColor
}) => {
  const getItemStyles = () => ({
    item: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingTop: 14,
      paddingBottom: 14,
      paddingLeft: 16,
      paddingRight: 16,
      borderBottom: `1px solid ${colorScheme === 'dark' ? '#404040' : '#ddd'}`,
      border: "none",
      background: "none",
      width: "100%",
      cursor: "pointer",
      transition: "all 0.2s ease",
      borderRadius: "8px",
      marginBottom: "4px",
      backgroundColor: colorScheme === 'dark' ? '#2d2d2d' : 'transparent',
    },
    highlightItem: {
      backgroundColor: accentColor,
      borderRadius: 6,
    },
    activeItem: {
      backgroundColor: colorScheme === 'dark' ? 'rgba(196, 119, 25, 0.2)' : 'rgba(196, 119, 25, 0.1)',
      borderLeft: `4px solid ${accentColor}`,
    },
    logoutItem: {
      backgroundColor: colorScheme === 'dark' ? 'rgba(220, 38, 38, 0.1)' : 'rgba(220, 38, 38, 0.05)',
      border: `1px solid ${colorScheme === 'dark' ? 'rgba(220, 38, 38, 0.3)' : 'rgba(220, 38, 38, 0.2)'}`,
      marginTop: "8px",
    },
    icon: {
      marginRight: 12,
      fontSize: 20,
      color: colorScheme === 'dark' ? '#e0e0e0' : '#333',
      width: "24px",
      textAlign: "center",
    },
    highlightIcon: {
      color: "#fff",
    },
    activeIcon: {
      color: accentColor,
    },
    logoutIcon: {
      color: "#dc2626",
      fontSize: "18px",
    },
    label: {
      fontSize: 16,
      color: colorScheme === 'dark' ? '#e0e0e0' : '#333',
      display: "flex",
      alignItems: "center",
      gap: "8px",
      flex: 1,
      fontWeight: "500",
    },
    highlightLabel: {
      color: "#fff",
      fontWeight: "bold",
    },
    activeLabel: {
      color: accentColor,
      fontWeight: "bold",
    },
    logoutLabel: {
      color: "#dc2626",
      fontWeight: "600",
      fontSize: "15px",
    },
  });

  const styles = getItemStyles();

  return (
    <button
      style={{
        ...styles.item, 
        ...(highlight && styles.highlightItem),
        ...(isActive && styles.activeItem),
        ...(isLogout && styles.logoutItem)
      }}
      onClick={onPress}
    >
      <span style={{
        ...styles.icon, 
        ...(highlight && styles.highlightIcon),
        ...(isActive && styles.activeIcon),
        ...(isLogout && styles.logoutIcon)
      }}>
        {iconName}
      </span>
      <span style={{
        ...styles.label, 
        ...(highlight && styles.highlightLabel),
        ...(isActive && styles.activeLabel),
        ...(isLogout && styles.logoutLabel)
      }}>
        {label}
      </span>
    </button>
  );
};

const SideMenu = ({ 
  visible, 
  onClose, 
  user, 
  onLogout, 
  accentColor, 
  currentPath,
  colorScheme,
  onToggleColorScheme 
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { colorScheme: themeColorScheme } = useTheme();

  // Usar el colorScheme del prop o del theme hook
  const currentColorScheme = colorScheme || themeColorScheme;

  // Items del menú con sus rutas correspondientes
  const menuItems = [
    { label: "Inicio", path: "/home" },
    { label: "Galería", path: "/galeria" },
    { label: "Tienda", path: "/tienda" },
    { label: "Ayuda", path: "/ayuda" }
  ];

  // Función para verificar si un item está activo
  const isActiveItem = (path) => {
    return currentPath === path || location.pathname === path;
  };

  const logout = async () => {
    onLogout();
    onClose();
    navigate("/login");
  };

  const getStyles = () => ({
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1000,
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#000",
      opacity: 0.5,
    },
    menu: {
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      width: "80%",
      maxWidth: 300,
      backgroundColor: currentColorScheme === 'dark' ? '#2d2d2d' : '#f9f9f9',
      paddingTop: 60,
      paddingLeft: 20,
      paddingRight: 20,
      boxShadow: "-2px 0 6px rgba(0,0,0,0.4)",
      overflowY: "auto",
      transition: 'background-color 0.3s ease',
    },
    closeButton: {
      position: "absolute",
      top: 15,
      right: 15,
      width: 50,
      height: 50,
      borderRadius: "50%",
      backgroundColor: currentColorScheme === 'dark' ? '#404040' : '#f0f0f0',
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: 'background-color 0.3s ease',
    },
    closeIcon: {
      fontSize: 30,
      fontWeight: "bold",
      color: currentColorScheme === 'dark' ? '#e0e0e0' : '#333',
      lineHeight: 1,
      transition: 'color 0.3s ease',
    },
    title: {
      fontSize: 22,
      fontWeight: "bold",
      color: accentColor,
      marginBottom: 20,
      display: "block",
    },
    separator: {
      height: 1,
      backgroundColor: currentColorScheme === 'dark' ? '#404040' : '#e0e0e0',
      marginTop: 15,
      marginBottom: 15,
      transition: 'background-color 0.3s ease',
    },
    userSection: {
      marginTop: 10,
      marginBottom: 10,
    },
    avatarContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 15,
      padding: "12px",
      backgroundColor: currentColorScheme === 'dark' ? '#363636' : 'rgba(255, 255, 255, 0.7)',
      borderRadius: "10px",
      border: `1px solid ${currentColorScheme === 'dark' ? '#404040' : '#e0e0e0'}`,
      transition: 'background-color 0.3s ease, border-color 0.3s ease',
    },
    avatarIcon: {
      fontSize: 40,
    },
    userInfo: {
      display: "flex",
      flexDirection: "column",
      marginLeft: 12,
    },
    userName: {
      fontSize: 16,
      color: currentColorScheme === 'dark' ? '#ffffff' : '#333',
      fontWeight: "600",
      transition: 'color 0.3s ease',
    },
    userEmail: {
      fontSize: 13,
      color: currentColorScheme === 'dark' ? '#b0b0b0' : '#666',
      marginTop: 2,
      transition: 'color 0.3s ease',
    },
    logoutSection: {
      marginTop: 10,
    },
    themeToggleSection: {
      padding: "12px 16px",
      borderBottom: `1px solid ${currentColorScheme === 'dark' ? '#404040' : '#e0e0e0'}`,
      marginBottom: "8px",
    },
    themeToggleButton: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      width: "100%",
      padding: "8px 0",
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
      color: currentColorScheme === 'dark' ? '#e0e0e0' : '#333',
      fontWeight: "500",
      fontSize: "14px",
      flex: 1,
      textAlign: "left",
      transition: 'color 0.3s ease',
    },
    toggleSwitch: {
      width: "40px",
      height: "20px",
      backgroundColor: currentColorScheme === 'dark' ? '#555' : '#e0e0e0',
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
  });

  const styles = getStyles();

  if (!visible) return null;

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.overlay} onClick={onClose} />
      
      <div style={styles.menu}>
        <button style={styles.closeButton} onClick={onClose}>
          <span style={styles.closeIcon}>×</span>
        </button>
        
        <span style={styles.title}>Menú</span>

        {/* Toggle de Tema en el SideMenu */}
        <div style={styles.themeToggleSection}>
          <button 
            style={styles.themeToggleButton}
            onClick={(e) => {
              e.stopPropagation();
              onToggleColorScheme();
            }}
          >
            <span style={styles.themeIcon}>
              {currentColorScheme === 'dark' ? '☀️' : '🌙'}
            </span>
            <span style={styles.themeText}>
              {currentColorScheme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
            </span>
            <div style={{
              ...styles.toggleSwitch,
              ...(currentColorScheme === 'dark' && styles.toggleSwitchActive)
            }}>
              <div style={{
                ...styles.toggleKnob,
                ...(currentColorScheme === 'dark' && styles.toggleKnobActive)
              }} />
            </div>
          </button>
        </div>

        {/* Mapear los items del menú con estado activo */}
        {menuItems.map((item) => (
          <MenuItem 
            key={item.path}
            label={item.label} 
            onPress={() => { onClose(); navigate(item.path); }} 
            isActive={isActiveItem(item.path)}
            colorScheme={currentColorScheme}
            accentColor={accentColor}
          />
        ))}

        <div style={styles.separator} />

        {user ? (
          <>
            <div style={styles.userSection}>
              <div style={styles.avatarContainer}>
                <span style={{...styles.avatarIcon, color: accentColor}}>👤</span>
                <div style={styles.userInfo}>
                  <span style={styles.userName}>{user.nombre} {user.apellido}</span>
                  <span style={styles.userEmail}>{user.usuario}</span>
                </div>
              </div>

              <div style={styles.logoutSection}>
                <MenuItem 
                  label="Cerrar sesión" 
                  onPress={logout}
                  isLogout={true}
                  colorScheme={currentColorScheme}
                  accentColor={accentColor}
                />
              </div>
            </div>
          </>
        ) : (
          <MenuItem 
            label="Iniciar sesión" 
            highlight 
            onPress={() => { onClose(); navigate("/login"); }} 
            isActive={isActiveItem("/login")}
            colorScheme={currentColorScheme}
            accentColor={accentColor}
          />
        )}
      </div>
    </div>
  );
};

export default SideMenu;