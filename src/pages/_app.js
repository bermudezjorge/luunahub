import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import dynamic from 'next/dynamic'
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";

const TopProgressBar = dynamic(
  () => {
    return import("@components/TopProgressBar");
  },
  { ssr: false },
);

import "@components/TopProgressBar/customnprogress.css"

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
  primaryColor: '#2babfa'
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Container>
            <TopProgressBar />
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  )
  
}