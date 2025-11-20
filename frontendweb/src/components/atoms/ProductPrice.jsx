import React from "react";

export default function ProductPrice({ price }) {
  const numericPrice = Number(price);

  return (
    <span style={styles.price}>
      ${!isNaN(numericPrice) ? numericPrice.toFixed(2) : "0.00"}
    </span>
  );
}

const styles = {
  price: {
    fontSize: 14,
    color: "#c47719",
    fontWeight: "600",
  },
};