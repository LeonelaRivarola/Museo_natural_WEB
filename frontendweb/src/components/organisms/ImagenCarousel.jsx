import React, { useRef, useEffect, useState } from "react";
import CarouselCard from "../molecules/CarouselCard";

const slides = [
  {
    title: "MIGRACIÓN",
    description:
      "Los seres humanos siempre se han desplazado de un lugar a otro. Descubre las historias de migrantes famosos y los viajes de personas comunes.",
    image: "/images/gallery1.jpg",
  },
  {
    title: "CULTURA",
    description:
      "Explora las expresiones culturales y tradiciones que conectan al ser humano con su entorno.",
    image: "/images/gallery2.jpg",
  },
  {
    title: "NATURALEZA",
    description:
      "Admira la belleza natural que nos rodea y aprende sobre la biodiversidad que debemos proteger.",
    image: "/images/gallery3.jpg",
  },
];

export default function ImageCarousel() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slides.length;

      const carousel = scrollRef.current;
      if (carousel) {
        const cardWidth = carousel.scrollWidth / slides.length;
        carousel.scrollTo({
          left: nextIndex * cardWidth,
          behavior: "smooth",
        });
      }

      setCurrentIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleIndicatorPress = (index) => {
    setCurrentIndex(index);

    const carousel = scrollRef.current;
    if (carousel) {
      const cardWidth = carousel.scrollWidth / slides.length;
      carousel.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={styles.container}>
      <div ref={scrollRef} style={styles.carousel}>
        {slides.map((slide, i) => (
          <div key={i} style={styles.cardWrapper}>
            <CarouselCard {...slide} />
          </div>
        ))}
      </div>

      <div style={styles.indicators}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleIndicatorPress(i)}
            style={{
              ...styles.dot,
              opacity: currentIndex === i ? 1 : 0.4,
            }}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  carousel: {
    display: "flex",
    flexDirection: "row",
    overflowX: "hidden",
    gap: "20px",
    scrollSnapType: "x mandatory",
    width: "80%",
  },
  cardWrapper: {
    flex: "0 0 70%",
    scrollSnapAlign: "center",
  },
  indicators: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    gap: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#c47719",
    border: "none",
    cursor: "pointer",
  },
};