import { useNavigate } from "react-router-dom";
import React from "react";
import ProductImage from "../atoms/ProductImage";
import ProductPrice from "../atoms/ProductPrice";
import ProductTitle from "../atoms/ProductTitle";

export default function ProductCard({ item, isAdmin = false, onEdit, onDelete }) {
  const navigate = useNavigate();

  return (
    <div style={styles.card}>
      <button
        style={styles.productButton}
        onClick={() =>
          !isAdmin &&
          navigate(`/producto/${item.id_producto}`)
        }
      >
        <ProductImage uri={item.imagen || "https://via.placeholder.com/300"} />
        <div style={styles.content}>
          <ProductTitle title={item.nombre} />
          <ProductPrice price={item.precio} />
        </div>
      </button>

      {isAdmin ? (
        <div style={styles.adminButtons}>
          <button style={styles.iconButton} onClick={onEdit}>
            <span style={styles.editIcon}>✏️</span>
            <span style={styles.iconLabel}>Editar</span>
          </button>
          <button style={styles.iconButton} onClick={onDelete}>
            <span style={styles.deleteIcon}>🗑️</span>
            <span style={{...styles.iconLabel, color: "red"}}>Eliminar</span>
          </button>
        </div>
      ) : (
        <button
          style={styles.viewButton}
          onClick={() => navigate(`/producto/${item.id_producto}`)}
        >
          <span style={styles.viewText}>Ver más</span>
        </button>
      )}
    </div>
  );
}

const styles = {
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 8,
    overflow: "hidden",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    border: "1px solid #eee",
  },
  productButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    padding: 0,
    width: "100%",
  },
  content: {
    padding: 10,
  },
  adminButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
    paddingBottom: 10,
    borderTop: "1px solid #eee",
  },
  iconButton: {
    display: "flex",
    alignItems: "center",
    border: "none",
    background: "none",
    cursor: "pointer",
    padding: 5,
  },
  editIcon: {
    fontSize: 22,
    color: "#c47719",
  },
  deleteIcon: {
    fontSize: 22,
    color: "red",
  },
  iconLabel: {
    fontSize: 12,
    color: "#555",
    marginTop: 3,
  },
  viewButton: {
    backgroundColor: "#c47719",
    paddingTop: 8,
    paddingBottom: 8,
    display: "flex",
    alignItems: "center",
    border: "none",
    cursor: "pointer",
    width: "100%",
  },
  viewText: {
    color: "#fff",
    fontWeight: "bold",
  },
};