import axios from 'axios'

const BASE_AUTH_URL = process.env.REACT_APP_BASE_AUTH_URL

export const requestLogin = data => {
  const config = {
    'Content-Type': 'application/json'
  }
  const url = `${BASE_AUTH_URL}/api/v1/authentication/admin/login/`

  return axios.post(url, data, config)
}

export const requestLogout = token => {
  const config = {
    'Content-Type': 'application/json',
    Authorization: `JWT ${token}`
  }
  const url = `${BASE_AUTH_URL}/api/v1/authentication/admin/logout/`

  return axios.post(url, {}, { headers: config })
}
