import { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  position: absolute;
  bottom: -20px;
  transition: 0.3s all ease;

  &:focus-within {
    bottom: -15px;
  }
`

const Container = styled.label`
  width: 80%
  height: 50px;
  background: #fff;
  box-shadow: 0px 3px 25px -7px #2191b9d4;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  transition: 0.3s all ease;
  opacity: 0.95;

  &:focus-within {
    box-shadow: 0px 7px 20px -5px #2191b9d4;
    opacity: 1;
  }
`

const Input = styled.input`
  height: 100%;
  font-family: Poppins;
  color: ${({theme}) => theme.primaryColor};
  font-weight: 500;
  border: none;
  outline: none;
`

const Button = styled.button`
  height: 100%;
  font-family: Poppins;
  background-color: ${({theme}) => theme.primaryColor};
  color: #fff;
  font-weight: 500;
  border-radius: 10rem;
  border: none;
  padding: 0.3rem 1rem;
`

const ButtonIcon = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Poppins;
  background-color: ${({theme}) => theme.primaryColor};
  color: #fff;
  font-weight: 500;
  border-radius: 10rem;
  border: none;
  padding: 0.3rem 1rem;
  margin-left: 0.3rem;
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 10rem;
`

const SearchForm = ({ setSearch, searchType, setSearchType }) => {
  const [text, setText] = useState('')
  const [error, setError] = useState(false)

  const handleOnChange = (e) => {
    setText(e.target.value)
    setError(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(text === '') {
      setError(true)
      return
    }

    setSearch(text)
  }

  const handleSwitchSearch = (e) => {
    e.preventDefault()

    setSearchType(prevSearchType => (
      prevSearchType === 'repos' ? 'users' : 'repos'
    ))
    
    setText('')
    setSearch('')
  }
  
  return (
    <Form>
      <Container>
        <Input
          type="text"
          value={text}
          onChange={handleOnChange}
          placeholder={searchType === 'repos' ? 'Buscar repos' : 'Buscar users'}
        />
        <Button onClick={handleSubmit}>
          Buscar
        </Button>
        <ButtonIcon onClick={handleSwitchSearch}>
          <Icon src="./icon/switch.png" alt="switch" />
        </ButtonIcon>
        {error && <p>Ingrese un dato</p>}
      </Container>
    </Form>
  )
}

export default SearchForm