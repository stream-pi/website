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
        "--spi-color-code-one": "#abb2bf",
        "--spi-color-code-two": "#282c34",
        "--spi-color-code-three": "#5c6370",
        "--spi-color-code-four": "#c678dd",
        "--spi-color-code-five": "#e06c75",
        "--spi-color-code-six": "#56b6c2",
        "--spi-color-code-seven": "#98c379",
        "--spi-color-code-eight": "#e6c07b",
        "--spi-color-code-nine": "#d19a66",
        "--spi-color-code-ten": "#61aeee",
      },
    
      light: {
        "--spi-color-body": "#f8f9fa",
        "--spi-color-text": "#000000e6",
        "--spi-color-heading": "#292922",
        "--spi-color-card": "#7ebfff",
        "--spi-color-theme-button": "#f8f9fa",
        "--spi-color-hr": "#00000066",
        "--spi-color-code-one": "#383a42",
        "--spi-color-code-two": "#fafafa",
        "--spi-color-code-three": "#a0a1a7",
        "--spi-color-code-four": "#a626a4",
        "--spi-color-code-five": "#e45649",
        "--spi-color-code-six": "#0184bb",
        "--spi-color-code-seven": "#50a14f",
        "--spi-color-code-eight": "#c18401",
        "--spi-color-code-nine": "#986801",
        "--spi-color-code-ten": "#4078f2",
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
