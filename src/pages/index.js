import Layout from '@components/Layout'
import FetchContainer from '@components/FetchContainer'

import { searchRepo } from '@api/github'

export default function Home ({ data }) {
  return (
    <Layout title="LuunaHub - Lo mejor de github aqui.">
      <FetchContainer data={data} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const DEFAULT_SEARCH = 'react'
  const DEFAULT_OPTIONS = { page: 0, per_page: 3 }

  const data = await searchRepo(DEFAULT_SEARCH, DEFAULT_OPTIONS)

  return { props: { data } }
}