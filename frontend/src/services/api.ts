import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000',
})

api.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem('token') || ''
    req.headers.authorization = `Bearer ${token}`
    return req
  },
  (err) => {
    console.log(err)
  }
)

export { api }
