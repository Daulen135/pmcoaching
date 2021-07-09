import axios from 'axios'
import { API_URL } from '../constants'

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "auth/login", {
        username, password
      })
      .then(response => {
        if (response.data.auth_token) {
          localStorage.setItem("user", JSON.stringify(response.data))
        }

        return response.data
      })
  }

  logout() {
    localStorage.removeItem("user")
  }

  register(username, password) {
    return axios.post(API_URL + "signup", {
      username, password
    })
    .then(response => {
      console.log(response)
    })
    .catch(err => console.log(err))
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'))
  }
}

export default new AuthService()
