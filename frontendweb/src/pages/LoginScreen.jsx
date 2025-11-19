// src/pages/LoginScreen.jsx
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import LoginSection from "../components/organisms/LoginSection";
import { getApiUrl } from '../config/api';

export default function LoginScreen() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!usuario || !password) {
      alert("Error: Debe ingresar usuario y contraseña");
      return;
    }

    try {
      const res = await fetch(getApiUrl('LOGIN'), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, password }),
      });

      const data = await res.json();
      console.log("Respuesta del backend:", data);

      if (data.status === 200) {
        const userData = {
          id: data.id,
          nombre: data.nombre,
          apellido: data.apellido,
          rol: data.rol_id,
        };

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("rol", data.rol_id.toString());

        navigate("/home");

      } else {
        alert("Error: " + (data.menssage || "Usuario o contraseña incorrectos"));
      }
    } catch (error) {
      alert("Error: No se pudo conectar con el servidor");
      console.error(error);
    }
  };

  return (
    <LoginSection
      usuario={usuario}
      password={password}
      setUsuario={setUsuario}
      setPassword={setPassword}
      onSubmit={handleLogin}
    />
  );
}