import axios from 'axios'

export const jsonClient = axios.create({
  baseURL: 'https://front-dev.tdeal.kr'
})
jsonClient.interceptors.response.use(
  (res) => {
    return res
  },
  (res) => {
    alert(res)
    return res
  }
)

export const multipartClient = axios.create({
  baseURL: 'https://front-dev.tdeal.kr',
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})
multipartClient.interceptors.response.use(
    (res) => {
      return res
    },
    (res) => {
      
      alert(res)
      return res
    }
  )