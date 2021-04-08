import Layout from '@components/Layout'
import RepoContainer from '@components/RepoContainer'
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

import searchRepo from '@util/search_repo'

export default function Home () {
  return (
    <Layout title="LuunaHub - Lo mejor de github aqui.">
      <RepoContainer />
    </Layout>
  )
}

export async function getServerSideProps() {
  const DEFAULT_SEARCH = 'react'

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery("repos", () => searchRepo(DEFAULT_SEARCH))

  return { props: { dehydratedState: dehydrate(queryClient) } }
}