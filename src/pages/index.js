import Head from 'next/head'

import Layout from '@components/Layout'
import HeroSection from '@components/HeroSection'
import SubTitle from '@components/SubTitle'
import Note from '@components/Note'
import FetchContainer from '@components/FetchContainer'

import { searchRepo } from '@api/github'

export default function Home ({ data }) {
  return (
    <Layout title="LuunaHub - Lo mejor de github aqui.">
      <HeroSection text="LuunaHub" />

      <SubTitle>Busca rapido repos, usuarios y hasta comparalos.</SubTitle>

      <FetchContainer data={data} />

      <Note>Pequeña nota: solo 10 peticiones por minuto.</Note>
    </Layout>
  )
}

export async function getServerSideProps() {
  const DEFAULT_SEARCH = 'react'
  const DEFAULT_OPTIONS = { page: 0, per_page: 3 }

  const data = await searchRepo(DEFAULT_SEARCH, DEFAULT_OPTIONS)

  return { props: { data } }
}