import { useThemeColor } from "../../hooks/use-theme-color";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const MenuItem = ({
  label,
  iconName,
  onPress,
  highlight,
}) => {
  return (
    <button
      style={{...styles.item, ...(highlight && styles.highlightItem)}}
      onClick={onPress}
    >
      <span style={{...styles.icon, ...(highlight && styles.highlightIcon)}}>
        {iconName}
      </span>
      <span style={{...styles.label, ...(highlight && styles.highlightLabel)}}>
        {label}
      </span>
    </button>
  );
};

const SideMenu = ({ visible, onClose }) => {
  const navigate = useNavigate();
  const accentColor = useThemeColor({}, "tint");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const savedUser = localStorage.getItem("user");
      if (savedUser) setUser(JSON.parse(savedUser));
    };
    loadUser();
  }, [visible]);

  const logout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("rol");
    setUser(null);
    onClose();
    navigate("/login");
  };

  if (!visible) return null;

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.overlay} onClick={onClose} />
      
      <div style={styles.menu}>
        <span style={styles.title}>Menú</span>

        <MenuItem label="Inicio" iconName="🏠" onPress={() => { onClose(); navigate("/home"); }} />
        <MenuItem label="Galería" iconName="🖼️" onPress={() => { onClose(); navigate("/galeria"); }} />
        <MenuItem label="Tienda" iconName="🛍️" onPress={() => { onClose(); navigate("/tienda"); }} />
        <MenuItem label="Eventos" iconName="📅" onPress={() => console.log("Eventos")} />
        <MenuItem label="Ayuda" iconName="❓" onPress={() => console.log("Ayuda")} />

        <div style={styles.separator} />

        {user ? (
          <>
            <div style={styles.avatarContainer}>
              <span style={{...styles.avatarIcon, color: accentColor}}>👤</span>
              <span style={styles.userName}>{user.nombre} {user.apellido}</span>
            </div>

            <MenuItem label="Cerrar sesión" iconName="🚪" highlight onPress={logout} />
          </>
        ) : (
          <MenuItem label="Iniciar sesión" iconName="🔑" highlight onPress={() => { onClose(); navigate("/login"); }} />
        )}
      </div>
    </div>
  );
};

export default SideMenu;

const styles = {
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
    backgroundColor: "#f9f9f9",
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
    boxShadow: "-2px 0 6px rgba(0,0,0,0.4)",
    overflowY: "auto",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#c47719ff",
    marginBottom: 20,
    display: "block",
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 14,
    paddingBottom: 14,
    borderBottom: "1px solid #ddd",
    border: "none",
    background: "none",
    width: "100%",
    cursor: "pointer",
  },
  highlightItem: {
    backgroundColor: "#c47719ff",
    borderRadius: 6,
  },
  icon: {
    marginRight: 12,
    fontSize: 24,
    color: "#333",
  },
  highlightIcon: {
    color: "#fff",
  },
  label: {
    fontSize: 18,
    color: "#333",
  },
  highlightLabel: {
    color: "#fff",
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginTop: 10,
    marginBottom: 10,
  },
  avatarContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  avatarIcon: {
    fontSize: 48,
  },
  userName: {
    fontSize: 18,
    marginLeft: 10,
    color: "#333",
    fontWeight: "600",
  },
};