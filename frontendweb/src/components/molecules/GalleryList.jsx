import React from "react";
import { useNavigate } from "react-router-dom";

export default function GalleryList({ title, images, seeAllRoute }) {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.title}>{title}</span>

        <button
          style={styles.viewAllButton}
          onClick={() => {
            if (seeAllRoute) navigate(seeAllRoute);
            else console.log("Ver todo");
          }}
        >
          <span style={styles.viewAll}>Ver todo</span>
        </button>
      </div>

      <div style={styles.list}>
        {images.map((item, index) => (
          <button
            key={index}
            style={styles.card}
            onClick={() => console.log("Imagen clickeada:", item.title)}
          >
            <div
              style={{
                ...styles.image,
                backgroundImage: `url(${item.image})`,
              }}
            >
              <div style={styles.overlay}>
                <span style={styles.cardText}>{item.title}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

const CARD_WIDTH = "60vw";
const CARD_HEIGHT = 200;

const styles = {
  container: {
    marginTop: 20,
    marginBottom: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  viewAllButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    padding: 0,
  },
  viewAll: {
    fontSize: 16,
    color: "#c47719ff",
    fontWeight: "500",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    overflowX: "auto",
    paddingLeft: 10,
    paddingRight: 10,
    gap: 15,
  },
  card: {
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#ddd",
    border: "none",
    cursor: "pointer",
    padding: 0,
    flexShrink: 0,
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: "flex-end",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  cardText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
};
