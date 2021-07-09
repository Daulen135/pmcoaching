import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import AuthService from '../services/auth.service'
import NavBar from './NavBar'

export default function Dashboard() {

  const history = useHistory()

  function logOut() {
    AuthService.logout()
    history.push('/login')
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="mx-auto mb-3">

              <h2>PMCOACHING COURSES</h2>
            </div>

            <NavBar />
            <div className="mt-3">
		            <video className="w-100" src='/video/Meeting.mp4' autoPlay loop muted/>
		        </div>


            <div className="mt-4 w-50 mx-auto mb-5">
              <Button variant="danger" size="lg" block onClick={logOut}>Logout</Button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
