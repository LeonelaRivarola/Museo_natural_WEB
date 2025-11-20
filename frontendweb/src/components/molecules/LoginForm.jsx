// components/molecules/LoginForm.jsx
import React from "react";
import InputField from "../atoms/InputField";

export default function LoginForm({
  usuario,
  password,
  setUsuario,
  setPassword,
}) {
  return (
    <div style={styles.container}>
      <InputField
        placeholder="Usuario o email"
        icon="person-outline"
        value={usuario}
        onChangeText={setUsuario}
        type="text"
      />

      <InputField
        placeholder="Contraseña"
        icon="lock-closed-outline"
        value={password}
        onChangeText={setPassword}
        type="password"
      />

      <span style={styles.footerText}>¿Olvidaste tu contraseña?</span>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "0 10px",
  },
  footerText: {
    fontSize: "14px",
    color: "#c47719",
    marginTop: "10px",
    textAlign: "center",
    cursor: "pointer",
    textDecoration: "underline",
    "@media (max-width: 480px)": {
      fontSize: "13px",
    }
  },
};