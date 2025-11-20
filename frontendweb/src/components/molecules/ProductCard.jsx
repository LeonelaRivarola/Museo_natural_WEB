import { useNavigate } from "react-router-dom";
import React from "react";
import ProductImage from "../atoms/ProductImage";
import ProductPrice from "../atoms/ProductPrice";
import ProductTitle from "../atoms/ProductTitle";
import { getImageUrl } from "../../config/api.js";

export default function ProductCard({ item, isAdmin = false, onEdit, onDelete }) {
  const navigate = useNavigate();

  return (
    <div style={styles.card}>
      <button
        style={styles.productButton}
        onClick={() => !isAdmin && navigate(`/producto/${item.id_producto}`)}
      >
        {/* Imagen del producto correctamente corregida */}
        <ProductImage uri={getImageUrl(item.imagen)} />

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
            <span style={{ ...styles.iconLabel, color: "#d32f2f" }}>Eliminar</span>
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
    backgroundColor: "#fff",
    borderRadius: 6,
    margin: 8,
    overflow: "hidden",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    border: "1px solid #e0e0e0",
    display: "flex",
    flexDirection: "column",
    minWidth: 150,
  },
  productButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    padding: 0,
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  content: {
    padding: 12,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  adminButtons: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 12px",
    borderTop: "1px solid #f0f0f0",
    backgroundColor: "#fafafa",
  },
  iconButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "none",
    background: "none",
    cursor: "pointer",
    padding: 4,
    gap: 4,
  },
  editIcon: {
    fontSize: 16,
    color: "#c47719",
  },
  deleteIcon: {
    fontSize: 16,
    color: "#d32f2f",
  },
  iconLabel: {
    fontSize: 11,
    color: "#666",
    fontWeight: "500",
  },
  viewButton: {
    backgroundColor: "#c47719",
    padding: "10px 12px",
    border: "none",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  viewText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
  },
};
