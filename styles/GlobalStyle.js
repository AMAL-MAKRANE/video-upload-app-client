import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  :root {
    // common
    --text-primary-color: #222222;
    --text-secondary-color: #FFFFFF;
    --text-light-color: #666666;
    --background-main-color: #F5F5F5;
    --background-secondary-color:#FFFFFF; 
    --input-placeholder-color: #A8A8A8;
    --input-border-color: #DBDBDB;
    --button-primary-color: #005FFC;
    --button-secondary-color: #F5F5F5;
  

    --font-sans: -apple-system, system-ui, BlinkMacSystemFont, 'Helvetica Neue',
    'Helvetica', sans-serif;
  }

 
  html, body {
    margin:0;
    padding:0;
    height:100%;
    width: 100%;
  }

  body {
    background-color: var(--background-main-color);
    color: var(--text-primary-color);
    font-family: var(--font-sans);

    font-size: 16px;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    font-style: normal;
  }

  input,
  textarea {
    background: transparent;
    background-color: var(--background-secondary-color);
  }

  a,
  button {
    :active {
      outline: none;
    }
  }

  ul,
  ol {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration-skip-ink: auto;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button, a {
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    width: 100%;
    height: 100%;
  }
`

export default GlobalStyle
