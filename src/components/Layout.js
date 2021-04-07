import Head from 'next/head'
import styled from 'styled-components'

import HeroSection from '@components/HeroSection'
import Header from '@components/Header'
import Footer from '@components/Footer'

const MaxWidth = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`

export default function Layout({
  children,
  title = 'LuunaHub',
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <HeroSection text="Busca repos y usuarios. Y hasta se pueden comparar?" />
      <MaxWidth>
        {children}
        <Footer />
      </MaxWidth>
    </div>
  )
}