import React from "react";

export default function ProductImage({ uri }) {
  const fallback = "https://via.placeholder.com/300x200?text=Sin+Imagen";

  return (
    <div style={styles.container}>
      <img
        src={uri || fallback}
        style={styles.image}
      />
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#eee",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};
