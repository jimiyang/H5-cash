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
  /*
  if (response.config.method === 'post') {
    if (response.data.head.errCode === 0) {
      Notification.success('操作成功')
    } else {
      Notification.error('操作失败')
    }
  }
  if (response.data.head.errCode !== 0) {
    if (response.data.head.errCode !== 204) {
      Notification.error(response.data.head.errMsg)
    }
  }
  */
  return response.data
})

export {ajax}
