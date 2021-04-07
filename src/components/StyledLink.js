import {useRouter} from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'

const A = styled.a`
  font-family: Poppins;
  font-weight: 500;
  color: ${({active}) => active ? '#2babfa' : '#44568b'};
  font-size: 1rem;
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