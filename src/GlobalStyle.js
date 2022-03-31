const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    background-color: var(--main-bg-clr);
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    color: var(--font-clr);
  }
  
  a {
    color: var(--font-clr);
    text-decoration: none;
  }
`;

export default GlobalStyle;
