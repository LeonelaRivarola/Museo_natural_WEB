import React from "react";
import NavbarWeb from "../components/organisms/Navbar";
import ProductList from "../components/organisms/ProductList";

export default function StoreScreen() {
  return (
    <div style={styles.container}>
      <NavbarWeb />

      <div style={styles.contentWrapper}>
        
        {/* Encabezado de sección */}
        <div style={styles.headerBox}>
          <h1 style={styles.title}>Tienda del Museo</h1>
          <p style={styles.subtitle}>
            Explore nuestra selección de productos oficiales. Cada compra contribuye al desarrollo y la conservación de nuestras actividades educativas y científicas.
          </p>
        </div>

        {/* Lista de productos */}
        <ProductList />
      </div>
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    minHeight: "100vh",
  },
  contentWrapper: {
    flex: 1,
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    paddingTop: 40,
    paddingBottom: 40,
    paddingLeft: 15,
    paddingRight: 15,
  },

  // Encabezado elegante similar al de Ayuda
  headerBox: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    marginBottom: 30,
  },
  title: {
    margin: 0,
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 10,
  },
};
