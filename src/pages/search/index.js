import { useState } from 'react'
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

import Layout from '@components/Layout'
import RepoContainer from '@components/RepoContainer'
import UserContainer from '@components/UserContainer'

import searchRepo from '@util/search_repo'

export default function Search({ searchTerm, serverSearchType }) {
  const [search, setSearch] = useState(searchTerm || null)
  const [searchType, setSearchType] = useState(serverSearchType || 'repos')

  return (
    <Layout
      title={`LuunaHub - ${searchTerm || 'Buscar'}`}
      setSearch={setSearch}
      searchType={searchType}
      setSearchType={setSearchType}
    >
      {
        searchType === 'repos' ? (
          <RepoContainer search={search} />          
        ) : (
          <UserContainer search={search} />
        )
      }
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const {...params} = context.query;

  //check if there's a query param to execute prefetch
  if(params.hasOwnProperty("q")) {
    const searchTerm = params.q

    const serverSearchType = params.search_type
    
    const queryClient = new QueryClient()
    
    await queryClient.prefetchQuery("repos", () => searchRepo(searchTerm))

    return { props: { dehydratedState: dehydrate(queryClient), searchTerm, serverSearchType } }
  }

  return { props: { searchTerm: null } }
}