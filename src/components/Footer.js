import styled from 'styled-components'

import Note from '@components/Note'

const Container = styled.footer`
  display: grid;
  grid-template-columns: 70% 30%;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    margin-bottom: 1rem;
  }
`

const FooterText = styled.h3`
  font-family: Poppins;
  color: gray;
  font-size: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`

const Footer = () => (
  <Container>
    <div>
      <Note>Pequeña nota: solo 10 peticiones por minuto.</Note>
      <Note>Luunahub soon a  Luuna's web app (soon unicorn company), well if they hire Jorge.</Note>
    </div>
    <FooterText>Hi, just be happy.</FooterText>
  </Container>
)
export default Footer