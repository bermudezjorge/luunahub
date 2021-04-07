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

  @media (min-width: 768px) {
    position: initial;
    background: transparent;
    padding: 1rem 0;
  }
`

const Logo = styled.h1`
  font-family: Poppins;
  color: ${({theme}) => theme.primaryColor};
  font-weight: 900;
  font-size: 1.2rem;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

const links = [
  { href: '/compare', text: 'Comparar'},
  { href: '/favs', text: 'Favoritos'},
  { href: '/search', text: 'Buscar'},
]

const Header = () => (
  <header>
    <Nav>
      <StyledLink
        href="/"
      >
        <Logo>LuunaHub</Logo>
      </StyledLink>
      {links.map(({ href, text }) => (
        <StyledLink
          href={href}
        >
          {text}
        </StyledLink>
      ))}
    </Nav>
  </header> 
)

export default Header