import Link from 'next/Link'
import styled from 'styled-components'

const AasButton = styled.a`
  height: 50px;
  padding: 1rem 2rem;
  color: ${({theme}) => theme.primaryColor};
  background: #fff;
  box-shadow: 0px 3px 25px -7px #2191b9d4;
  position: absolute;
  bottom: -20px;
  border-radius: 1rem;
  font-family: Poppins;
  font-weight: 500;
  display: flex;
  align-items: center;
`

const ButtonLink = () => (
  <Link href="/search">
    <AasButton role="button">
      Realizar busqueda
    </AasButton>
  </Link>
)


export default ButtonLink