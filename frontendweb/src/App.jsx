import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Ejemplo rutas categorías */}
        <Route path="/arqueologia" element={<div>Arqueología</div>} />
        <Route path="/herbarios" element={<div>Herbarios</div>} />
        <Route path="/zoologia" element={<div>Zoología</div>} />
        <Route path="/paleo" element={<div>Paleontología</div>} />
      </Routes>
    </BrowserRouter>
  );
}
