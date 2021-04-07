//default api options
export const DEFAULT_OPTIONS = {
  per_page: 5,
  page: 0
}

//concatenate api search options
export const createOptions = options => (
  Object.entries(options)
  .reduce((optionsParatemers, option) => 
      optionsParatemers += `&${option[0]}=${option[1]}`
  , '')
)