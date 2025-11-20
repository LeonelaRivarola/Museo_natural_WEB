import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/organisms/Navbar";
import ImageCarousel from "../components/organisms/ImagenCarousel";
import HorarioCard from "../components/molecules/HorarioCard";
import RegisterBanner from "../components/molecules/RegisterBanner";
import Novedades from "../components/molecules/Novedades";
import VisitBanner from "../components/molecules/VisitaBanner";
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
      <Navbar active="/home" />

      <div className="scroll-container">
        {/* HERO SECTION */}
        <div className="hero">
          <div
            className="hero-background"
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
        </div>

        <div className="separator"></div>

        <HorarioCard />

        <div className="separator"></div>

        <h2 className="mini-titulos">Vení a visitarnos</h2>

        <ImageCarousel />

        <VisitBanner />

        <div className="separator"></div>

        <h2 className="mini-titulos">Novedades</h2>
        <Novedades />

        <div className="separator"></div>
        <div style={{ height: "20px" }}></div>

        <RegisterBanner />
      </div>
    </div>
  );
}