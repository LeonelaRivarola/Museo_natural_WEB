// frontendweb/src/constants/theme.js

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
    hamburger: "#000",
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
    icon: "#ddd",
    hamburger: "#fff",
    tabIconDefault: "#aaa",
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = {
  sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  serif: "Georgia, 'Times New Roman', Times, serif",
  rounded: "'SF Pro Rounded', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
};

export const FontFamilies = Fonts;