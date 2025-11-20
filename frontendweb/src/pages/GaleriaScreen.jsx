import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Galeria.css";

const categories = ["Todo", "Eventos", "Colecciones", "Talleres"];

const order = ["Eventos", "Colecciones", "Talleres"];

const allImages = [
  { id: 1, title: "Evento Cultural", category: "Eventos", image: "/images/gallery1.jpg" },
  { id: 2, title: "Colección de Arte", category: "Colecciones", image: "/images/gallery2.jpg" },
  { id: 3, title: "Taller de Cerámica", category: "Talleres", image: "/images/gallery3.jpg" },
  { id: 4, title: "Muestra Patrimonial", category: "Colecciones", image: "/images/gallery4.jpg" },
];

export default function GaleriaScreen() {
  const [activeCategory, setActiveCategory] = useState("Todo");
  const navigate = useNavigate();

  const filteredImages =
    activeCategory === "Todo"
      ? [...allImages].sort(
          (a, b) => order.indexOf(a.category) - order.indexOf(b.category)
        )
      : allImages.filter((img) => img.category === activeCategory);

  return (
    <div className="galeria-container">    
      <div className="galeria-scroll-container">
        <h1 className="galeria-header-title">Galería del Museo</h1>

        {/* Filtros */}
        <div className="galeria-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`galeria-tab-button ${
                activeCategory === cat ? "galeria-tab-button-active" : ""
              }`}
            >
              <span
                className={`galeria-tab-text ${
                  activeCategory === cat ? "galeria-tab-text-active" : ""
                }`}
              >
                {cat}
              </span>
            </button>
          ))}
        </div>

        {/* Grid estilo blog */}
        <div className="galeria-grid">
          {filteredImages.map((item) => (
            <div key={item.id} className="galeria-card">
              <img 
                src={item.image} 
                alt={item.title}
                className="galeria-image" 
              />
              <div className="galeria-overlay">
                <h3 className="galeria-card-text">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}