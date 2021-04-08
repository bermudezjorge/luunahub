import { useQuery } from "react-query";

import searchRepo from '@util/search_repo'

const useRepos = (search) => {
  return useQuery(["repos", search], () => searchRepo(search))
}

export default useRepos