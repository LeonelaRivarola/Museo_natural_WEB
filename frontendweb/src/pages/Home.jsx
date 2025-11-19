import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/organisms/Navbar";
// Comentar o eliminar esta línea:
// import HorarioCard from "../components/molecules/HorarioCard";
import ImageCarousel from "../components/organisms/ImagenCarousel";

import "../styles/Home.css"; 

export default function Home() {
  const navigate = useNavigate();

  const categorias = [
    { titulo: "Arqueología", icon: "/icons/arqueologia.png", ruta: "/arqueologia" },
    { titulo: "Herbarios", icon: "/icons/herbario.png", ruta: "/herbarios" },
    { titulo: "Zoología", icon: "/icons/zoologia.png", ruta: "/zoologia" },
    { titulo: "Paleontología", icon: "/icons/paleo.png", ruta: "/paleo" },
  ];

  return (
    <div className="home-container">

      <Navbar />

      <div
        className="hero"
        style={{
          backgroundImage: `url(/images/portada_inicio.jpg)`
        }}
      >
        <div className="overlay">
          <div className="overlay-tint"></div>

          <div className="text-container">
            <h1 className="title">¡Bienvenidos/as!</h1>
            <h2 className="subtitle">Descubrí la historia y naturaleza</h2>
          </div>

          {/* Categorías */}
          <div className="categorias-web">
            {categorias.map((item, i) => (
              <div
                key={i}
                className="categoria"
                onClick={() => navigate(item.ruta)}
              >
                <div className="circulo">
                  <img src={item.icon} className="icono" alt={item.titulo} />
                </div>
                <p className="categoria-texto">{item.titulo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{padding: 20, textAlign: 'center'}}>
        <h3>Horarios del Museo</h3>
        <p>Lunes a Viernes: 9:00 - 18:00</p>
        <p>Sábados y Domingos: 10:00 - 16:00</p>
      </div>

      <ImageCarousel />

    </div>
  );
}
