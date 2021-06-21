import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html {
      scroll-behavior: smooth;
    }
    
    :root {
      --black: #000000;
      --white: #FFFFFF;
    }
    body {
        background-color: var(--white);
        font-family: var(--regular);
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        font-feature-settings: 'salt' on;
    }
    main {
      background: var(--white) !important;
    }
    * {
      box-sizing: border-box;
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }
    ::selection {
      background: black;
      color: white;
    }
    button {
      -webkit-appearance: none;
      background: transparent;
      box-shadow: none;
      border: none;
      cursor: pointer;
    }
    button:focus {
      outline: 0;
    }
`