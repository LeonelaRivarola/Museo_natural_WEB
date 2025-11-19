import React from "react";

export default function InputField({
  placeholder,
  icon,
  value,
  onChangeText,
  secureTextEntry,
}) {
  return (
    <div style={styles.container}>
      <span style={styles.icon}>{icon}</span>
      <input
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        type={secureTextEntry ? "password" : "text"}
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "solid",
    borderRadius: 8,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 12,
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: 500,
    marginLeft: "auto",
    marginRight: "auto",
  },
  icon: {
    marginRight: 8,
    color: "#c47719",
    fontSize: 20,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    color: "#333",
    fontSize: 18,
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
  },
};
