import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f0f2f5;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h2{
  margin: 0;
  padding: 0;
  }

    p{
  margin: 0;
  padding: 0;
  }
`;

export default GlobalStyle;
