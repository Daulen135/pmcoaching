import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import UserService from '../services/user.service'
import { Nav, NavItem, NavLink } from 'reactstrap';
import Leadership from './Leadership';

const Leaderships = () => {

  const [leaderships, setLeaderships] = useState([])

  useEffect(() => {

    fetchLeaderships()
  }, [])

  async function fetchLeaderships() {
    const response = await UserService.fetchLeaderships()
    setLeaderships(response.data)
  }

	return (
    <>
      <div className="container-fluid">
        <Row>
          <Col lg={10} className="mx-auto mt-5 text-center">
            <h1 className="text-center mb-5">Leadership Courses</h1>
            <h4 className="mb-4">
              PMcoaching - offers it's members one of the top world's best course in XXX area!
            </h4>
            <Nav navbar>
              {leaderships.map((leadership) => (
                <NavItem>
                  <NavLink
                    style={{color: "#9D7E68", fontSize: "18px", fontWeight: "bold", fontFamily: "Permanent Marker, cursive"}}
                    href={"/leadership/" + leadership.id}>{ leadership.name }</NavLink>
                </NavItem>
              ))}
            </Nav>

          </Col>
        </Row>
      </div>
    </>
	)
}

export default Leaderships;
