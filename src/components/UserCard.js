import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #dee4fb;
  border-radius: 7px;
  padding: 0.5rem;

  &:hover {
    border-color: ${({theme}) => theme.primaryColor};
  }
`

const Avatar = styled.img`
  width: 50px;
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
  display: block;
  font-family: Poppins;
  font-weight: 500;
  color: #264c5a;
  font-size: 0.8rem;
  margin: 0.3rem 0;
  text-align: center;
`


const UserCard = ({ data }) => (
  <Container>
    <Avatar src={data.avatar_url} />
    <Name>{data.login}</Name>
    <ExternalLink target="_blank" href={data.html_url} rel="noopener noreferrer">
      Visitar Github Page
    </ExternalLink>
    <ExternalLink target="_blank" href={data.repos_url} rel="noopener noreferrer">
      Checar repos de una manera inneficiente, por que no :D
    </ExternalLink>
  </Container>
)

export default UserCard