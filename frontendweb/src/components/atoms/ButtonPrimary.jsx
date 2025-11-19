import React from "react";

export default function ButtonPrimary({ title, onPress }) {
  const buttonStyle = {
    backgroundColor: "#c47719",
    border: "none",
    borderRadius: "8px",
    padding: "12px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    minWidth: "200px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  };

  const textStyle = {
    color: "#fff",
    fontSize: "18px",
    fontWeight: "600",
    margin: "0",
  };

  return (
    <button
      style={buttonStyle}
      onClick={onPress}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#a36214")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#c47719")}
    >
      <span style={textStyle}>{title}</span>
    </button>
  );
}
