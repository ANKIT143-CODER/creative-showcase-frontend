import axios from 'axios'

const API = axios.create({
  baseURL: 'https://creative-showcase-backend-1.onrender.com/api', // backend URL
})

export default API
