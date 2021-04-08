import { useQuery } from "react-query";

import searchUser from '@util/search_user'

const useUsers = (search) => {
  return useQuery(["users", search], () => searchUser(search))
}

export default useUsers