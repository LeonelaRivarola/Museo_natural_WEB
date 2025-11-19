import React from "react";

export default function SecondaryButton({ title, onPress }) {
  return (
    <button style={styles.button} onClick={onPress}>
      <span style={styles.text}>{title}</span>
    </button>
  );
}

const styles = {
  button: {
    borderWidth: 1,
    borderColor: "#c47719",
    borderStyle: "solid",
    borderRadius: 10,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    cursor: "pointer",
    minWidth: 200,
  },
  text: {
    color: "#c47719",
    fontWeight: "bold",
    fontSize: 18,
    margin: 0,
  },
};
