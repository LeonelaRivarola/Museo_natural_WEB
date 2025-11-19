import React from "react";
import NavbarWeb from "../components/organisms/Navbar";
import ProductList from "../components/organisms/ProductList";

export default function StoreScreen() {
  return (
    <div style={styles.container}>
      <NavbarWeb />
      
      <div style={styles.contentWrapper}>
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
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 100, // espacio para la navbar fija
  },
};