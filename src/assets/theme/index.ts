const themeConfig = {
  dark: {
    "--spi-color-body": "#161625",
    "--spi-color-text": "#e1e1ff",
    "--spi-color-heading": "#818cab",
    "--spi-color-card": "#595775",
    "--spi-color-theme-button": "#343a40",
    "--spi-color-hr": "#ffffff66",
  },

  light: {
    "--spi-color-body": "#f8f9fa",
    "--spi-color-text": "#000000e6",
    "--spi-color-heading": "#292922",
    "--spi-color-card": "#7ebfff",
    "--spi-color-theme-button": "#f8f9fa",
    "--spi-color-hr": "#00000066",
  },
};

export const setThemeConfig = (inputTheme) => {
  if (inputTheme === "dark") {
    const theme = themeConfig.dark;
    for (let key in theme) {
      setCSSVar(key, theme[key]);
    }
    localStorage.setItem("theme", inputTheme);
  } else {
    const theme = themeConfig.light;
    for (let key in theme) {
      setCSSVar(key, theme[key]);
    }
    localStorage.setItem("theme", inputTheme);
  }
};

function setCSSVar(property, color) {
  document.documentElement.style.setProperty(property, color);
}
