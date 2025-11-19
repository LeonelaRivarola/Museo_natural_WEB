import React from "react";

export default function TextTitle({ text, style, variant = "default" }) {
  return (
    <span
      style={{
        ...styles.title,
        ...(variant === "label" ? styles.label : {}),
        ...style,
      }}
    >
      {text}
    </span>
  );
}

const styles = {
  title: {
    fontWeight: "bold",
    color: "#222",
    fontSize: 28,
  },
  label: {
    color: "#fff",
    backgroundColor: "#0055ff",
    fontSize: 14,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    borderRadius: 4,
    alignSelf: "flex-start",
    overflow: "hidden",
  },
};
