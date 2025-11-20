import React from "react";

export default function ProductTitle({ title }) {
  return <span style={styles.title}>{title}</span>;
}

const styles = {
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#222",
    lineHeight: "1.3",
  },
};