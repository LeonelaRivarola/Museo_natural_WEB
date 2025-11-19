import React from "react";

export default function NavbarMobile({ onMenuPress }) {
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <img
          src="/images/logo-sinfondo.png"
          style={styles.logo}
        />
        <span style={styles.title}>Museo Natural</span>
      </div>

      <div style={styles.right}>
        <button style={styles.iconButton}>
          <span style={styles.searchIcon}>🔍</span>
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  right: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 45,
    height: 45,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  iconButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    padding: 0,
  },
  searchIcon: {
    fontSize: 26,
  },
};