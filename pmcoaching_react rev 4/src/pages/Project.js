import React, { useState, useEffect, useReducer } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import UserService from '../services/user.service'
import { Switch, Route, Redirect, useParams, Link } from 'react-router-dom';


// Project Management Course
const Project = () => {
  const { pid } = useParams()
  const [project, setProject] = useState({
    image: null,
    title: null,
    desc: null,
    langs: null
  })

  useEffect(() => {
    fetchProject(pid)

  }, [])

  async function fetchProject(id) {
    const response = await UserService.fetchProject(id)
    const data = response.data

    setProject({...data})
  }

	return (
		<>
      <div className="w-75 mx-auto mt-5">
        <Row>
          <Col lg={7}>
            <Image image={project.image}></Image>
          </Col>

          <Col lg={5}>
            <div className="text-center pt-5">
              <Title title={project.name} />
              <Desc desc={project.description} />
              <div className="mx-auto w-75 text-left mb-4">
                <Langs langs={project.languages} />
                <Controls />
              </div>

              <Link to="/projects" className="text-danger">Back to Projects</Link>

            </div>
          </Col>
        </Row>
      </div>
		</>
	)
}

const Image = ({ image }) => <img className="w-100" src={image} alt='' />
const Title = ({ title }) => <h3> { title }</h3>
// const Price = ({ price }) => <h4 className="mt-3">{ price }</h4>
const Desc = ({ desc }) => <h4 className="mt-3">{ desc }</h4>

const Langs = ({ langs }) => {
  return (
    <>
      <h5 className="mt-4">Languages: { langs }</h5 >
    </>
  )
}

const Controls = () => {

  function bookAppointment() {
    window.location.href = "https://daulen-zhangabylov.youcanbook.me/"
  }

  return (
    <>
      <Button variant="primary" size="md" block>Buy Course</Button>
      <Button variant="secondary" size="md" block onClick={bookAppointment}>Book Appointment</Button>
    </>
  )
}

export default Project;
