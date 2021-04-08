import axios from 'axios'

const API = 'https://api.github.com/search/users'

const searchUser = async (query = 'react') => {
    const API_URL = `${API}?q=${query}&per_page=5`

    const { data } = await axios.get(API_URL)

    return data
}

export default searchUser