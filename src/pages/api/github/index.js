import axios from 'axios'

import { FETCH_CASES } from '@util/contants'
import {DEFAULT_OPTIONS, createOptions} from '@util/github_api_util'

const API = 'https://api.github.com/search/repositories'

export const searchRepo = async (query, options) => {
  try{
    //merge options to defauls options
    const mergeOptions = {...DEFAULT_OPTIONS, ...options}

    const API_URL = `${API}?q=${query}${createOptions(mergeOptions)}`

    const { data } = await axios.get(API_URL)

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
    sort: params.sort,
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