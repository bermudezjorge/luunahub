import { useRouter } from 'next/router'
import styled from 'styled-components'

import ButtonLink from '@components/ButtonLink'
import SearchForm from '@components/SearchForm'

const Section = styled.div`
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #3483fe, #2da3fb);
  padding: 2rem 0;
  border-radius: 0 0 1rem 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin: 1rem 2rem;
    border-radius: 1rem;
  }
`

const Title = styled.h1`
  font-family: Poppins;
  color: #fff;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  padding: 0 1rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`

const HeroSection = ({ setSearch, searchType, setSearchType }) => {
  const {pathname} = useRouter()

  return (
    <Section>
      <Title>Busca repos y usuarios</Title>
      
      {pathname === "/" ? (
        <ButtonLink />
        ) : (
        <SearchForm setSearch={setSearch} searchType={searchType} setSearchType={setSearchType} />
      )}
    </Section>
  )
}

export default HeroSection