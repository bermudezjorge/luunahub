import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  border: 1px solid #dee4fb;
  border-radius: 7px;
  padding: 0.5rem;
`

const OwnerLayout = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
`

const SkeletonImg = styled.img`
  width: 100%;
  background-color: #e0e2e6;
`

const SkeletonText = styled.div`
  width: 100%;
  height: 30px;
  background-color: #e0e2e6;
`

const RepoLayout = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5rem;
  padding-left: 2rem;
`

const DataLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 0.5rem;
`

const SkeletonData = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e0e2e6;
`


const RepoCardSkeleton = ({ repoData }) => (
  <Container>
    <OwnerLayout>
      <SkeletonImg />
      <SkeletonText />
    </OwnerLayout>
    <RepoLayout>
      <SkeletonText />
      <DataLayout>
        <SkeletonData />
        <SkeletonData />
        <SkeletonData />
        <SkeletonData />
        <SkeletonData />
      </DataLayout>
    </RepoLayout>
  </Container>
)

export default RepoCardSkeleton