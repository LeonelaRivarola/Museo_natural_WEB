import React from "react";
import "./Navbar.css";
import { useAuth } from "../../hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();

  const links = [
    { name: "Inicio", path: "/home" },
    { name: "Galería", path: "/galeria" },
    { name: "Tienda", path: "/tienda" },
    { name: "Ayuda", path: "/ayuda" },
  ];

  const currentPath = window.location.pathname;

  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        {/* IZQUIERDA */}
        <div className="left-container">
          <a href="/home">
            <img
              src="/assets/images/logo-sinfondo.png"
              className="logo"
              alt="logo"
            />
          </a>
          <h1 className="title">Museo Natural</h1>
        </div>

        {/* DERECHA */}
        <div className="right-container">
          <div className="nav-links">
            {links.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  className={`link ${isActive ? "active" : ""}`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {user ? (
            <div className="avatar-container" onClick={logout}>
              <span className="user-icon">👤</span>
              <span className="user-name">{user.nombre}</span>
            </div>
          ) : (
            <a href="/login" className="login-button">
              Iniciar sesión
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
