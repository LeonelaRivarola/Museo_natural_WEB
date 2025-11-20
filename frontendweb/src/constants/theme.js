// frontendweb/src/constants/themes.ts

const tintColorLight = "#c47719";
const tintColorDark = "#c47719";

export const Colors = {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    navbarBackground: tintColorLight,
    navbarText: "#fff",
    buttonText: "#fff",
    icon: "#555",           // íconos grises
    hamburger: "#000",      // ← hamburguesa negra para modo claro
    tabIconDefault: "#777",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#151718",
    tint: tintColorDark,
    navbarBackground: tintColorDark,
    navbarText: "#fff",
    buttonText: "#fff",
    icon: "#ddd",           // íconos claros
    hamburger: "#fff",      // ← hamburguesa blanca para modo oscuro
    tabIconDefault: "#aaa",
    tabIconSelected: tintColorDark,
  },
};

// Para web no necesitamos Platform.select
export const Fonts = {
  sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  serif: "Georgia, 'Times New Roman', Times, serif",
  rounded: "'SF Pro Rounded', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
};

// Compatibilidad
export const FontFamilies = Fonts;
