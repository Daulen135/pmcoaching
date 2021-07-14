import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import UserService from '../services/user.service'
import { Nav, NavItem, NavLink } from 'reactstrap';

const Projects = () => {

  const [projects, setProjects] = useState([])

  useEffect(() => {

    fetchProjects()
  }, [])

  async function fetchProjects() {
    const response = await UserService.fetchProjects()
    setProjects(response.data)
  }

	return (
    <>
      <div className="container-fluid">
        <Row>
          <Col lg={10} className="mx-auto mt-5 text-center">
            <h1 className="text-center mb-5">Projects Management</h1>
            <h4 className="mb-4">
              PMcoaching - offers it's members one of the top world's best course in PM area!
            </h4>
            <Nav navbar>
              {projects.map((project) => (
                <NavItem>
                  <NavLink
                    style={{color: "#9D7E68", fontSize: "18px", fontWeight: "bold", fontFamily: "Permanent Marker, cursive"}}
                    href={"/project/" + project.id}>{ project.name }</NavLink>
                </NavItem>
              ))}
            </Nav>

          </Col>
        </Row>
      </div>
    </>
	)
}

export default Projects;
