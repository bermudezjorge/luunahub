import styled from 'styled-components'

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: cetner;
  background: linear-gradient(to right, #3483fe, #2da3fb);
`

const Title = styled.h1`
  font-family: Poppins;
  color: #fff;
  font-size: 3rem;
  margin-bottom: 1rem;
`

const HeroSection = ({ text }) => {
  return (
    <Section>
      <Title>{text}</Title>
    </Section>
  )
}

export default HeroSection