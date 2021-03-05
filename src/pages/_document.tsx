import Document, { Html, Head, Main, NextScript } from "next/document";

const themeScript = `
(function () {
  var currentTheme;

  function changeTheme(inputTheme) {
    if (inputTheme === "dark") {
      var theme = themeConfig.dark;
      for (var key in theme) {
        setCSSVar(key, theme[key]);
      }
      localStorage.setItem("theme", inputTheme);
    } else {
      var theme = themeConfig.light;
      for (var key in theme) {
        setCSSVar(key, theme[key]);
      }
      localStorage.setItem("theme", inputTheme);
    }
  }

  function setCSSVar(property, color) {
    document.documentElement.style.setProperty(property, color);
  }
  try {
    currentTheme = localStorage.getItem("theme") || "dark";
    var themeConfig = {
      dark: {
        "--spi-color-body": "#161625",
        "--spi-color-text": "#e1e1ff",
        "--spi-color-heading": "#818cab",
        "--spi-color-card": "#595775",
        "--spi-color-theme-button": "#343a40",
        "--spi-color-hr": "#ffffff66",
        "--spi-color-code-one": "#002b36",
        "--spi-color-code-two": "#839496",
        "--spi-color-code-three": "#586e75",
        "--spi-color-code-four": "#859900",
        "--spi-color-code-five": "#2aa198",
        "--spi-color-code-six": "#268bd2",
        "--spi-color-code-seven": "#b58900",
        "--spi-color-code-eight": "#cb4b16",
        "--spi-color-code-nine": "#dc322f",
        "--spi-color-code-ten": "#073642",
      },
    
      light: {
        "--spi-color-body": "#f8f9fa",
        "--spi-color-text": "#000000e6",
        "--spi-color-heading": "#292922",
        "--spi-color-card": "#7ebfff",
        "--spi-color-theme-button": "#f8f9fa",
        "--spi-color-hr": "#00000066",
        "--spi-color-code-one": "#fdf6e3",
        "--spi-color-code-two": "#657b83",
        "--spi-color-code-three": "#93a1a1",
        "--spi-color-code-four": "#859900",
        "--spi-color-code-five": "#2aa198",
        "--spi-color-code-six": "#268bd2",
        "--spi-color-code-seven": "#b58900",
        "--spi-color-code-eight": "#cb4b16",
        "--spi-color-code-nine": "#dc322f",
        "--spi-color-code-ten": "#eee8d5",
      },
    };

    changeTheme(currentTheme);
  } catch (err) {
    console.log(err);
  }
})();
`;
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        </Head>
        <body>
          <script>0</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
