import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'
import { useState } from 'react'

const FancyButton = styled.button`
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border-radius: 7px;
  border: none;
`

const REPO_API = 'https://api.github.com/search/repositories'

export default function App() {
  const [search, setSearch] = useState('react')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const searchRepo = () => {
    setLoading(true)

    fetch(`${REPO_API}?q=${search}&page=1&per_page=1`)
    .then(res => res.json())
    .then(({items}) => {
      setLoading(false)
      setData([items[0].name, items[0].forks, items[0].full_name, items[0].homepage, items[0].description, items[0].owner.login])
    })
  }

  return (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>Search</h1>

    <input value={search} onChange={(e) => setSearch(e.target.value)} />

    <FancyButton onClick={searchRepo}>Search</FancyButton>

    {loading && <h1>loading...</h1>}

    {data && (
      <ul>
        {data.map(data => (
          <li key={data}>{data}</li>
        ))}
      </ul>
    )}
  </div>
  )
}
