// components/atoms/InputField.jsx
import React from "react";

const InputField = ({ 
  placeholder, 
  icon, 
  value, 
  onChangeText, 
  type = "text",
  secureTextEntry = false 
}) => {
  return (
    <div style={styles.inputContainer}>
      {/* Si tienes íconos, puedes implementarlos aquí */}
      <input
        style={styles.input}
        type={secureTextEntry ? "password" : type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
      />
    </div>
  );
};

const styles = {
  inputContainer: {
    width: "100%",
    position: "relative",
  },
  input: {
    width: "100%",
    padding: "15px 20px",
    fontSize: "16px",
    border: "2px solid #e0e0e0",
    borderRadius: "10px",
    backgroundColor: "#fff",
    outline: "none",
    transition: "all 0.3s ease",
    boxSizing: "border-box",
    "&:focus": {
      borderColor: "#c47719",
      boxShadow: "0 0 0 3px rgba(196, 119, 25, 0.1)",
    },
    "@media (max-width: 480px)": {
      padding: "12px 16px",
      fontSize: "14px",
    }
  },
};

export default InputField;