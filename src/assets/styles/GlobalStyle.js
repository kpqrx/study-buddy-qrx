import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input, select {
    border: none;
    background-color: transparent;
    font-family: inherit;
    cursor: pointer;
  }

  ul, ol {
    list-style: none;
  }
`;

export default GlobalStyle;
