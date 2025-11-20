// src/pages/Ayuda/index.jsx
export default function Ayuda() {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>

        <h1 style={styles.title}>Centro de Ayuda</h1>

        <p style={styles.subtitle}>
          En esta sección podrá encontrar información útil y respuestas a las consultas más frecuentes.
        </p>

        {/* Preguntas Frecuentes */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Preguntas Frecuentes</h2>

          <div style={styles.faqItem}>
            <span style={styles.faqQ}>📦 ¿Cómo puedo realizar una compra?</span>
            <span style={styles.faqA}>
              Para comprar un producto, ingrese a la Tienda, seleccione un artículo y presione “Ver más”.
            </span>
          </div>

          <div style={styles.faqItem}>
            <span style={styles.faqQ}>💳 ¿Qué métodos de pago están disponibles?</span>
            <span style={styles.faqA}>
              Los métodos de pago habilitados se detallan en la página de cada producto.
            </span>
          </div>

          <div style={styles.faqItem}>
            <span style={styles.faqQ}>🐆 ¿Cómo puedo comunicarme con el Museo?</span>
            <span style={styles.faqA}>
              Puede enviarnos un correo electrónico o llamarnos a los teléfonos indicados en la sección de contacto.
            </span>
          </div>
        </div>

        {/* Contacto */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Contacto</h2>
          <p style={styles.contactText}>
            Si necesita asistencia personalizada, puede comunicarse con nosotros a través de los siguientes medios:
          </p>
          <p style={styles.contactLine}>📧 Correo electrónico: contacto@museonatural.com</p>
          <p style={styles.contactLine}>📞 Teléfono: +54 0000 0000</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    paddingTop: 40,
    paddingBottom: 40,
  },
  wrapper: {
    width: "100%",
    maxWidth: 900,
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 8,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  title: {
    margin: 0,
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 10,
    marginBottom: 30,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    color: "#333",
    marginBottom: 15,
  },
  faqItem: {
    marginBottom: 18,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  faqQ: {
    fontWeight: "600",
    fontSize: 15,
    color: "#444",
  },
  faqA: {
    fontSize: 14,
    color: "#666",
    marginLeft: 4,
  },
  contactText: {
    fontSize: 15,
    color: "#555",
    marginBottom: 15,
  },
  contactLine: {
    fontSize: 14,
    color: "#444",
    marginBottom: 6,
  },
};
