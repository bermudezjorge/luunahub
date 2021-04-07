import Head from 'next/head'
import styled from 'styled-components'

import StyledLink from '@components/StyledLink'

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  background-color: #f6f7fb;
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
      <header>
        <Nav>
          <StyledLink
            href="/compare"
          >
            Comparar
          </StyledLink>
          <StyledLink
            href="/search"
          >
            Buscador
          </StyledLink>
          <StyledLink
            href="/favs"
          >
            Favoritos
          </StyledLink>
        </Nav>
      </header>

      {children}

      <footer>{'I`m here to stay'}</footer>
    </div>
  )
}