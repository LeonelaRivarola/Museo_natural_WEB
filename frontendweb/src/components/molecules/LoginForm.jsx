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
        placeholder="Usuario"
        icon="person-outline"
        value={usuario}
        onChangeText={setUsuario}
      />

      <InputField
        placeholder="Contraseña"
        icon="lock-closed-outline"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <span style={styles.footerText}>¿Has olvidado la contraseña?</span>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    maxWidth: 400,
    alignSelf: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#555",
    marginTop: 8,
    textAlign: "center",
  },
};
