import styled from 'styled-components'

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #3483fe, #2da3fb);
  border-radius: 1rem;
  margin: 1rem 2rem;
  padding: 2rem 0;
`

const Title = styled.h1`
  font-family: Poppins;
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  padding: 0 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`

const HeroSection = ({ text }) => {
  return (
    <Section>
      <Title>{text}</Title>
    </Section>
  )
}

export default HeroSection