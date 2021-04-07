import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Layout from "@components/Layout"

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background: #fff;
  }

  @font-face {
    font-family: "Poppins";
    src: url("/fonts/Poppins-Black.ttf") format("ttf"),
  }

  @font-face {
    font-family: "Manrope";
    src: url("/fonts/Manrope-Bold.ttf") format("ttf"),
  }
`

const theme = {

}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 1rem;
`

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Container>
          <Component {...pageProps} />
        </Container>
    </ThemeProvider>
  )
  
}