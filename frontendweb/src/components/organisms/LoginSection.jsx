// components/organisms/LoginSection.jsx
import React from "react";
import TextTitle from "../atoms/TextTitle";
import LoginForm from "../molecules/LoginForm";
import ButtonPrimary from "../atoms/ButtonPrimary";

const LoginSection = ({ usuario, password, setUsuario, setPassword, onSubmit, onRegister }) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        {/* Left Section */}
        <div style={styles.left}>
          <img 
            src="/images/logo-sinfondo.png" 
            alt="Logo" 
            style={styles.logo} 
          />
          <TextTitle text="Iniciar sesión" style={styles.title} />

          <div style={styles.formWrapper}>
            <LoginForm
              usuario={usuario}
              password={password}
              setUsuario={setUsuario}
              setPassword={setPassword}
            />
            <div style={styles.buttonWrapper}>
              <ButtonPrimary title="Ingresar" onPress={onSubmit} />
            </div>

            <span style={styles.registerText}>
              ¿No tenés cuenta?{' '}
              <span style={styles.registerLink} onClick={onRegister}>
                Registrarme
              </span>
            </span>
          </div>
        </div>

        {/* Right Section - Solo visible en desktop */}
        <div style={styles.right}>
          <img 
            src="/images/portada_mobile.jpg" 
            alt="Portada" 
            style={styles.image} 
          />
        </div>
      </div>
    </div>
  );
};

// Estilos responsivos con media queries en React
const styles = {
  wrapper: {
    width: "100%",
    minHeight: "100vh",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    // Background image para desktop
    backgroundImage: "url('/images/portada_mobile.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  card: {
    width: "100%",
    maxWidth: "1100px",
    backgroundColor: "rgba(255,255,255,0.95)",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
    // Media query para tablet
    "@media (max-width: 900px)": {
      flexDirection: "column",
      maxWidth: "500px",
    },
    // Media query para mobile
    "@media (max-width: 768px)": {
      borderRadius: "15px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    }
  },
  left: {
    flex: 1,
    padding: "50px 40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 900px)": {
      padding: "40px 30px",
    },
    "@media (max-width: 480px)": {
      padding: "30px 20px",
    }
  },
  right: {
    flex: 1,
    display: "flex",
    "@media (max-width: 900px)": {
      display: "none", // Ocultar imagen en móvil/tablet
    }
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  logo: {
    width: "160px",
    marginBottom: "20px",
    "@media (max-width: 900px)": {
      width: "140px",
      marginBottom: "15px",
    },
    "@media (max-width: 480px)": {
      width: "120px",
      marginBottom: "10px",
    }
  },
  title: {
    marginBottom: "30px",
    textAlign: "center",
    "@media (max-width: 480px)": {
      marginBottom: "20px",
    }
  },
  formWrapper: {
    width: "100%",
    maxWidth: "380px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonWrapper: {
    width: "100%",
    marginTop: "25px",
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 480px)": {
      marginTop: "20px",
    }
  },
  registerText: {
    fontSize: "15px",
    marginTop: "25px",
    color: "#555",
    textAlign: "center",
    "@media (max-width: 480px)": {
      fontSize: "14px",
      marginTop: "20px",
    }
  },
  registerLink: {
    color: "#c47719",
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

// Componente para manejar media queries en React
const MediaQueryWrapper = ({ children, style }) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveStyle = (baseStyle) => {
    const responsiveStyle = { ...baseStyle };
    
    // Aplicar media queries manualmente
    if (windowWidth <= 480) {
      // Mobile styles
      if (baseStyle["@media (max-width: 480px)"]) {
        Object.assign(responsiveStyle, baseStyle["@media (max-width: 480px)"]);
      }
    } else if (windowWidth <= 900) {
      // Tablet styles
      if (baseStyle["@media (max-width: 900px)"]) {
        Object.assign(responsiveStyle, baseStyle["@media (max-width: 900px)"]);
      }
    }
    
    // Remover media queries del objeto final
    delete responsiveStyle["@media (max-width: 480px)"];
    delete responsiveStyle["@media (max-width: 900px)"];
    delete responsiveStyle["@media (max-width: 768px)"];
    
    return responsiveStyle;
  };

  return React.cloneElement(children, {
    style: getResponsiveStyle(style)
  });
};

export default LoginSection;