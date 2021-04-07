import styled from 'styled-components'
import RepoCard from '@components/RepoCard'

import { FETCH_CASES } from '@util/contants'

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
  margin: 3rem 0;

  @media (min-width: 768px) {
    grid-template-columns: 50% 50%;
  }
`

const FetchContainer = ({ data }) => {
  if(data.hasOwnProperty('message')) {
    const message = data.message
    return <h1>{FETCH_CASES[message].userMessage}</h1>
  }

  return (
    <Container>
      {data.map(repoData => (
        <RepoCard key={repoData.id} data={repoData} />
      ))}
    </Container>
  )
}

export default FetchContainer