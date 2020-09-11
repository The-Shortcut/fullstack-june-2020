import axios from 'axios'

const api = axios.create({
    baseURL: 'https://fullstack-fitness-api.herokuapp.com'
})

export default api