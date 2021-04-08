import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'

const A = styled.a`
  font-family: Manrope;
  font-weight: 900;
  color: ${(props) => props.active ? props.theme.primaryColor : '#44568b'};
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`

const StyledLink = ({ href, children }) => {
  const router = useRouter()

  const isActive = router.pathname === href

  return (
    <Link href={href}>
      <A active={isActive}>
        {children}
      </A>
    </Link>
  )
}

export default StyledLink