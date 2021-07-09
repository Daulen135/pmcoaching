import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import AuthService from '../services/auth.service'
import UserService from '../services/user.service'

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [hidden, setHidden] = useState("d-none")
  const [errorMsg, setErrorMsg] = useState('No field can be blank.')
  const [isLoggedIn, setLoggedIn] = useState(false)


  const user = AuthService.getCurrentUser()
  if (user) {
    UserService.getUser()
      .then(() => {
        setLoggedIn(true)
      })
      .catch((err) => console.log(err))
  }

  function signin (e) {
    e.preventDefault();

    if (username === "" || password === "") {
      setHidden('d-block')
      return
    }

    AuthService.login(username, password)
      .then(() => {
        setLoggedIn(true)
      })
      .catch((err) => {
        setErrorMsg("Username or Password is incorrect.")
        setHidden('d-block')
      })

  }

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />
  }

  return (
    <>
      <div style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2020/01/06/05/06/activity-4744581__340.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh" }} className="App">
        <div className="vh-100 d-flex justify-content-center">
          <div className="form-access my-auto">
            <form onSubmit={signin}>
              <span>Sign In</span>
              <div className="form-group">
                <input
                  type="input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>

              <div className={`alert alert-danger ${hidden}`} role="alert">
                {errorMsg}
              </div>

              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </form>
            <h2>
              Don't have an account? <Link to="/signup">Sign up here</Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
