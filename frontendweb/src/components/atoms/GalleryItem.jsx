import React from "react";

const GalleryItem = ({ image, onPress }) => {
  return (
    <button
      style={styles.item}
      onClick={onPress}
    >
      <img src={image} style={styles.image} />
    </button>
  );
};

export default GalleryItem;

const styles = {
  item: {
    marginRight: 10,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#eee",
    border: "none",
    cursor: "pointer",
    padding: 0,
  },
  image: {
    width: "40vw",
    height: "25vw",
    objectFit: "cover",
    display: "block",
  },
};
