import Layout from '@components/Layout'
import FetchContainer from '@components/FetchContainer'

import { searchRepo } from '@api/github'
import { FETCH_CASES } from '@util/contants'

export default function Home ({ data }) {
  return (
    <Layout title="LuunaHub - Lo mejor de github aqui.">
      <FetchContainer data={data} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { params } = context.query;

  //check if there's a query param
  if(params?.hasOwnProperty("q")) {
    const searchTerm = params?.q
  
    const options = {
      sort: params?.sort,
      per_page: params?.per_page,
      page: params?.page
    }
  
    const data = await searchRepo(searchTerm, options)
  
    return { props: { data } }
  } else {
    return { props: { data: { message: FETCH_CASES.missingQuery.message }}}
  }
}