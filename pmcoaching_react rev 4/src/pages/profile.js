import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useHistory } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import UserService from '../services/user.service'

export default function Profile() {
  const [age, setAge] = useState(null)
  const [gender, setGender] = useState(null)
  const [languages, setLanguages] = useState(null)
  const [occupation, setOccupation] = useState(null)
  const [interests, setInterests] = useState(null)

  const [updated, setUpdated] = useState(false)
  const history = useHistory()

  async function fetchProfile() {
    const response = await UserService.getProfile()
    const data = response.data
    setAge(data.age)
    setGender(data.gender)
    setLanguages(data.languages)
    setOccupation(data.occupation)
    setInterests(data.interests)
  }

  useEffect(() => {
    fetchProfile()

  }, [])

  function updateProfile(e) {
    e.preventDefault();

    UserService.updateProfile({
      age,
      gender,
      languages,
      occupation,
      interests
    }).then(() => setUpdated(true))
  }

  function deleteProfile(e) {

    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>Are you sure?</h1>
            <p>You want to delete the profile?</p>
            <button onClick={onClose}>No</button>
            <button
              onClick={() => {
                UserService.deleteProfile()
                .then(() => {
                  history.push('/dashboard')
                })
                onClose();
              }}
            >
              Yes, Delete it!
            </button>
          </div>
        );
      }
    });
  }

  if (updated) return <Redirect to="/dashboard" />

  return (
    <>
      <div className="container-fluid">
        <Row>
          <Col lg={6} className="mx-auto mt-5">
            <div className="card p-4">
              <div className="card-body">
                <h5 className="card-title">Profile Information</h5>
                <div className="settings-profile">
                  <form onSubmit={updateProfile}>
                    <div className="form-row mt-4">
                      <label htmlFor="formFirst">Age</label>
                      <input
                        type="text"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="form-control"
                        placeholder="Age"
                      />
                    </div>
                    <div className="form-row mt-4">
                      <label htmlFor="formFirst">Gender</label>
                      <input
                        type="text"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="form-control"
                        placeholder="Gender"
                      />
                    </div>
                    <div className="form-row mt-4">
                      <label htmlFor="formFirst">Languages</label>
                      <input
                        type="text"
                        value={languages}
                        onChange={(e) => setLanguages(e.target.value)}
                        className="form-control"
                        placeholder="Languages"
                      />
                    </div>
                    <div className="form-row mt-4">
                      <label htmlFor="formFirst">Occupation</label>
                      <input
                        type="text"
                        value={occupation}
                        onChange={(e) => setOccupation(e.target.value)}
                        className="form-control"
                        placeholder="Occupation"
                      />
                    </div>
                    <div className="form-row mt-4">
                      <label htmlFor="formFirst">Interests</label>
                      <input
                        type="text"
                        value={interests}
                        onChange={(e) => setInterests(e.target.value)}
                        className="form-control"
                        placeholder="Interests"
                      />
                    </div>

                    <div className="form-row mt-4">
                      <Button variant="primary" type="submit" className="mr-4">Update Profile</Button>
                      <Button variant="danger" type="button" onClick={deleteProfile}>Delete Profile</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
