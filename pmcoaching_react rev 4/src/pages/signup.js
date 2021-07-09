import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import AuthService from '../services/auth.service'

export default function Signup() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isRegistered, setRegistered] = useState(false)
  const [hidden, setHidden] = useState("d-none")
  const [errorMsg, setErrorMsg] = useState('No field can be blank.')

  function register(e) {
    e.preventDefault();

    if (username === "" || password === "" || confirmPassword === "") {
      setHidden('d-block')
      return
    }
    else if (password !== confirmPassword) {
      setHidden('d-block')
      setErrorMsg('Passwords are not matched.')
      return
    }

    AuthService.register(username, password)
      .then(() => {
        setRegistered(true)
      })
      .catch((err) => {
        console.log(err)
        // setErrorMsg(err)
        setHidden('d-block')
      })

  }

  if (isRegistered) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <div className="vh-100 d-flex justify-content-center">
        <div className="form-access my-auto">
          <form onSubmit={register}>
            <span>Create Account</span>
            <div className="form-group">
              <div className={`alert alert-danger ${hidden}`} role="alert">
                {errorMsg}
              </div>

              <input
                type="text"
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
            <div className="form-group">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-control"
                placeholder="Confirm Password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </form>
          <h2>
            Already have an account?
            <Link to="/login"> Sign in here</Link>
          </h2>
        </div>
      </div>
    </>
  );
}
