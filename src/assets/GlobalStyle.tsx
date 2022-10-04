import { createGlobalStyle } from 'styled-components'
import { colors } from '../theme'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html, input, select, button {
    font-family: 'Poppins', sans-serif;
    /* background-color: ${colors.black}; */
  }
`
