const API = 'https://api.github.com'

const DEFAULT_OPTIONS = {
  per_page: 10,
  page: 0,
}

//concatenate api search options
const injectSearchOptions = options => (
    Object.entries(options)
    .reduce((optionsParatemers, option) => 
        optionsParatemers += `&${option[0]}=${option[1]}`
    , '')
)

export default function generateApiEndpoint(type, searchTerm = null, options = null) {

  let newOptions = {}
  //only combined/replace if we're passing options
  if(options) {
    newOptions = {...DEFAULT_OPTIONS, ...options}
  }

  //check for emtpy searchTerm
  if(!searchTerm) throw new Error("SearchTerm not especified")

  switch (type) {
    case "search_repo": {}
      return `${API}/search/repositories?q=${searchTerm}${injectSearchOptions(newOptions)}`
  
    case "search_user":
      return `${API}/search/users?q=${searchTerm}${injectSearchOptions(newOptions)}`
  
    case "get_user_repos":
      return `${API}/users/${searchTerm}/repos`

    case "get_user":
      return `${API}/users/${searchTerm}`

    default:
      throw new Error('Not type maching, check endpoint type, generation endpoint error.')
  }
}