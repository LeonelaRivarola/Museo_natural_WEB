import React from "react";

export default function MenuItem({ label, onPress, iconName, highlight }) {
  return (
    <button
      style={{ ...styles.item, ...(highlight && styles.highlightItem) }}
      onClick={onPress}
    >
      <div style={styles.content}>
        {iconName && (
          <span style={{ ...styles.icon, ...(highlight && styles.highlightIcon) }}>
            {iconName}
          </span>
        )}

        <span
          style={{ ...styles.label, ...(highlight && styles.highlightLabel) }}
        >
          {label}
        </span>
      </div>
    </button>
  );
}

const styles = {
  item: {
    padding: "12px 16px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#f0f0f0",
    border: "none",
    width: "100%",
    cursor: "pointer",
  },
  highlightItem: {
    backgroundColor: "#c47719ff",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 12,
    fontSize: 24,
    color: "#333",
  },
  highlightIcon: {
    color: "#fff",
  },
  label: {
    fontSize: 18,
    color: "#333",
  },
  highlightLabel: {
    color: "#fff",
    fontWeight: "bold",
  },
};
