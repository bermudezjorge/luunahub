import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  border: 1px solid #dee4fb;
  border-radius: 7px;
  padding: 0.5rem;

  &:hover {
    border-color: ${({theme}) => theme.primaryColor};
  }
`

const OwnerLayout = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const RepoLayout = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5rem;
  padding-left: 2rem;
`

const Avatar = styled.img`
  width: 80%;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 80%;
  }
`

const Name = styled.h3`
  font-family: Manrope;
  color: #26bff7;
  font-size: 1.2rem;
  font-weight: 900;
  margin: 0.3rem 0;
  word-break: break-word;
`

const ExternalLink = styled.a`
  font-family: Poppins;
  font-weight: 500;
  color: #264c5a;
  font-size: 0.8rem;
  margin: 0.3rem 0;
`

const Description = styled.p`
  font-family: Manrope;
  font-size: 0.8rem;
  font-weight: 500;
  color: #898ea0;
  margin: 0.5rem 0;
`

const DataLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 0.5rem;
`

const DataSpan = styled.span`
  font-family: Manrope;
  font-weight: 500;
  font-size: 0.8rem;
  color: #0a84b1;
  margin: 0;
`

const Data = styled.p`
  font-family: Manrope;
  font-weight: 500;
  font-size: 0.8rem;
  margin: 0;
  color: #000;
`


const RepoCard = ({ data }) => (
  <Container>
    <OwnerLayout>
      <Avatar src={data.owner.avatar_url} />
      <Name>{data.owner.login}</Name>
      <ExternalLink target="_blank" href={data.owner.html_url} rel="noopener noreferrer">
        Visitar Github
      </ExternalLink>
    </OwnerLayout>

    <RepoLayout>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>

      <DataLayout>
        <ExternalLink target="_blank" href={data.homepage} rel="noopener noreferrer">
          Visitar Pagina web
        </ExternalLink>
        <ExternalLink target="_blank" href={data.html_url} rel="noopener noreferrer">
          Visitar Github Page
        </ExternalLink>
        <Data><DataSpan>Forks:</DataSpan> {data.forks}</Data>
        <Data><DataSpan>Stars:</DataSpan> {data.stars}</Data>
        <Data><DataSpan>Open Issues:</DataSpan> {data.open_issues}</Data>
      </DataLayout>
    </RepoLayout>
  </Container>
)

export default RepoCard