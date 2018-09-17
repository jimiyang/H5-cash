import axios from 'axios'
const url = '/'

let ajax = axios.create({
  baseURL: url
})
ajax.interceptors.request.use(function (config) {
  if (!config.data) {
    config.data = {}
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

ajax.interceptors.response.use(function (response) {
  return response.data
})

export {ajax}
