import React from "react";

export default function ProductImage({ uri }) {
  const fallback = "https://via.placeholder.com/300x200?text=Sin+Imagen";

  return (
    <div style={styles.container}>
      <img
        src={uri || fallback}
        style={styles.image}
        alt="Producto"
      />
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    height: 120,
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};