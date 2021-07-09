import axios from 'axios'
import authHeader from './auth-header'
import { API_URL } from '../constants'

class UserService {
  getUser() {
    return axios.get(API_URL + 'get_user', { headers: authHeader() })
  }

  getProfile() {
    return axios.get(API_URL + 'profile', { headers: authHeader() })
  }

  updateProfile(profile) {
    return axios.post(API_URL + 'update_profile', profile, { headers: authHeader() })
  }

  deleteProfile() {
    return axios.delete(API_URL + 'delete_profile', { headers: authHeader() })
  }

  fetchProjects() {
    return axios.get(API_URL + 'fetch_projects', { headers: authHeader() })
  }

  fetchProject(id) {
    return axios.get(API_URL + 'fetch_project/' + id , { headers: authHeader() })
  }

  fetchLeaderships() {
    return axios.get(API_URL + 'fetch_leaderships', { headers: authHeader() })
  }

  fetchLeadership(id) {
    return axios.get(API_URL + 'fetch_leadership/' + id , { headers: authHeader() })
  }
}

export default new UserService()
