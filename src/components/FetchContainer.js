import styled from 'styled-components'
import RepoCard from '@components/RepoCard'

import { FETCH_CASES } from '@util/contants'

const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem 0;
  margin-top: 3rem;
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