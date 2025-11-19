import React from "react";

export default function Overlay({ style }) {
  return <div style={{ ...styles.overlay, ...style }} />;
}

const styles = {
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
};
