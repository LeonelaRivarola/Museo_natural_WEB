import React from "react";
import TextTitle from "../atoms/TextTitle";
import TextParagraph from "../atoms/TextParagraph";
import Overlay from "../atoms/Overlay";

export default function CarouselCard({ title, description, image }) {
  return (
    <div style={styles.card}>
      <div
        style={{
          ...styles.image,
          backgroundImage: `url(${image})`,
        }}
      >
        <Overlay />
        <div style={styles.content}>
          <TextTitle text={title} variant="label" />
          <TextParagraph text={description} style={styles.description} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#000",
    marginTop: 50,
    marginBottom: 50,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
  },
  content: {
    padding: 20,
    position: "relative",
    zIndex: 1,
  },
  description: {
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
    fontSize: 14,
    lineHeight: "18px",
  },
};
