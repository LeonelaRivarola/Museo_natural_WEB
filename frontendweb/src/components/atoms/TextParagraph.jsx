import React from "react";

export default function TextParagraph({ text, style }) {
  return <span style={{ ...styles.paragraph, ...style }}>{text}</span>;
}

const styles = {
  paragraph: {
    color: "#fff",
    fontSize: 14,
    lineHeight: "18px",
  },
};
