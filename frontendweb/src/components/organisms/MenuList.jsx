import React from "react";
import MenuItem from "../molecules/MenuItem";
import { useNavigate } from "react-router-dom";

export default function MenuList() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <MenuItem label="Perfil" iconName="person-outline" onPress={() => console.log("Perfil")} />
      <MenuItem label="Eventos" iconName="calendar-outline" onPress={() => console.log("Eventos")} />
      <MenuItem label="Galería" iconName="images-outline" onPress={() => navigate("/galeria")} />
      <MenuItem label="Tienda" iconName="storefront-outline" onPress={() => navigate("/tienda")} />
      <MenuItem label="Sobre Nosotros" iconName="information-circle-outline" onPress={() => console.log("Sobre Nosotros")} />
      <MenuItem label="Ayuda" iconName="help-circle-outline" onPress={() => console.log("Ayuda")} />

      <div style={styles.separator} />
      <MenuItem
        label="Iniciar Sesión"
        iconName="log-in-outline"
        highlight
        onPress={() => navigate("/login")}
      />
    </div>
  );
}

const styles = {
  container: { flex: 1, backgroundColor: "#f0f0f0" },
  separator: { height: 1, backgroundColor: "#ccc", marginTop: 8, marginBottom: 8 },
};