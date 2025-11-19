import React from "react";
import TextTitle from "../atoms/TextTitle";
import LoginForm from "../molecules/LoginForm";
import ButtonPrimary from "../atoms/ButtonPrimary";

const LoginSection = ({
  usuario,
  password,
  setUsuario,
  setPassword,
  onSubmit,
  onRegister,
}) => {
  return (
    <div style={styles.background}>
      <div style={styles.overlay}>
        <div style={styles.card}>
          <div style={styles.leftSection}>
            <div style={styles.headerContainer}>
              <img
                src="/images/logo-sinfondo.png"
                style={styles.logo}
              />
              <TextTitle text="Iniciar sesión" style={styles.title} />
            </div>

            <div style={styles.formContainer}>
              <LoginForm
                usuario={usuario}
                password={password}
                setUsuario={setUsuario}
                setPassword={setPassword}
              />

              <div style={styles.buttonWrapper}>
                <ButtonPrimary title="Ingresar" onPress={onSubmit} />
              </div>

              <div style={styles.separatorContainer}>
                <div style={styles.line} />
              </div>

              <span style={styles.registerTextContainer}>
                ¿No tenés cuenta?{" "}
                <span
                  style={styles.registerLink}
                  onClick={onRegister}
                >
                  Registrarme
                </span>
              </span>
            </div>
          </div>

          <div style={styles.rightSection}>
            <img
              src="/images/portada_mobile.jpg"
              style={styles.innerImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  background: {
    width: "100%",
    height: "100vh",
    backgroundImage: "url('/images/portada_mobile.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.93)",
    borderRadius: 24,
    width: "85%",
    maxWidth: 1200,
    minHeight: "78%",
    overflow: "hidden",
    boxShadow: "0 8px 12px rgba(0,0,0,0.25)",
  },
  leftSection: {
    flex: 1.2,
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 60,
    paddingBottom: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
  },
  rightSection: {
    flex: 1,
    backgroundColor: "#eee",
  },
  innerImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 10,
    transform: "scale(1.8)",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
    marginTop: 12,
  },
  formContainer: {
    width: "100%",
    maxWidth: 380,
    display: "flex",
    alignItems: "center",
  },
  buttonWrapper: {
    width: "100%",
    marginTop: 16,
    display: "flex",
    alignItems: "center",
  },
  separatorContainer: {
    width: "100%",
    marginTop: 25,
    marginBottom: 25,
  },
  line: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.15)",
  },
  registerTextContainer: {
    textAlign: "center",
    fontSize: 14,
    color: "#555",
  },
  registerLink: {
    color: "#c47719",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default LoginSection;