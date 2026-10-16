
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    min-width: 320px;
    min-height: 100%;
    scroll-behavior: smooth;
  }

  body {
    min-width: 320px;
    min-height: 100vh;
    margin: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.body};
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  a {
    color: inherit;
  }

  ::selection {
    color: ${({ theme }) => theme.colors.background};
    background: ${({ theme }) => theme.colors.accent};
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`
