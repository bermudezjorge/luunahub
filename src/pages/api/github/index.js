import axios from 'axios'

import { FETCH_CASES } from '@util/contants'

const API = 'https://api.github.com'

const DEFAULT_OPTIONS = {
  per_page: 1,
  page: 0,
}

//concatenate api search options
const createOptions = options => (
    Object.entries(options)
    .reduce((optionsParatemers, option) => 
        optionsParatemers += `&${option[0]}=${option[1]}`
    , '')
)

export const searchRepo = async (query, options) => {
  //execute get and search using a generating endpoint string
  try{
    const { data } = await axios.get(`${API}/search/repositories?q=${query}${createOptions({...DEFAULT_OPTIONS, ...options})}`)

    //check if api per minute rate limit has exceed
    if(data.hasOwnProperty('message')) {
      return { message: FETCH_CASES.apiRateLimit.message }
    }
    //check if result is not found
    if(data.total_count === 0) {
      return { message: FETCH_CASES.notFound.message }
    }

    //filter only the needed data
    const filterData = data.items.map(repo => {
      return {
        id: repo.id,
        name: repo.name,
        forks: repo.forks,
        fullName: repo.full_name,
        homepage: repo.homepage,
        description: repo.description,
        stars: repo.stargazers_count,
        open_issues: repo.open_issues,
        license: repo.license.name,
        homepage: repo.homepage,
        gitUrl: repo.git_url,
        ownerName: repo.owner.login,
        ownerAvatar: repo.owner.avatar_url
      }
    })

    return filterData
  } catch (err) {
    return { message: FETCH_CASES.error.message, err: err.message }
  }
}


export default async (req, res) => {
  const {...params} = req.query

  const searchTerm = params.q

  const options = {
    per_page: params.per_page,
    page: params.page
  }

  try {
    const data = await searchRepo(searchTerm, options)
    res.status(200).json({ data })

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}


// "message": "Not Found"