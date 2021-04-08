import styled from 'styled-components'
import RepoCard from '@components/RepoCard'

import useRepos from '@hooks/useRepos'

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

const FallBackMessage = styled.h1`
  font-family: Poppins;
  font-weight: 500;
  color: lightgray;
  font-size: 2rem;
  margin-top: 7rem;
  margin-bottom: 5rem;
  text-align: center;
`

const RepoContainer = ({ search }) => {
  const { status, data, error, isFetching } = useRepos(search)

  return (
    <>
      {status === "loading" ? (
        <FallBackMessage>Loading...</FallBackMessage>
      ) : status === "error" ? (
        <FallBackMessage>Error: {error.message}</FallBackMessage>
      ) : (
        <Container>
          <>
            {data.items.map(repo => (
              <RepoCard key={repo.id} data={repo} />
            ))}

            {isFetching ? <span> Loading...</span> : null}
          </>
        </Container>
      )}
    </>
  )
}

export default RepoContainer