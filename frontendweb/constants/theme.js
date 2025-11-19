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
    icon: "#555",
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
    icon: "#aaa",
    tabIconDefault: "#aaa",
    tabIconSelected: tintColorDark,
  },
};

// Para web, podemos simplificar las fuentes ya que no necesitamos Platform.select
export const Fonts = {
  sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  serif: "Georgia, 'Times New Roman', Times, serif",
  rounded: "'SF Pro Rounded', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
};

// Opcional: Si quieres mantener compatibilidad con el código existente
export const FontFamilies = Fonts;