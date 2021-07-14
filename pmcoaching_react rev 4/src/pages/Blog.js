import React from 'react'
import { Row, Col,Button,Card } from 'react-bootstrap'
import { Nav, NavItem, NavLink } from 'reactstrap';



const Blogs = () => {
  return (




    
    <>
  
    <div id="background-video" >
		            <video className="w-100" src='/video/Meeting.mp4' autoPlay loop muted/>
    </div>

      <div className="container-fluid">
        <Row>
          <Col lg={10} className="mx-auto mt-5 text-center">
            <h2 className="mb-5">BLOGS</h2>
            <div className="card p-3 mb-5">
              <div className="card-body">

              <Card border="dark" style={{ width: '38rem' }}>
              <Card.Header as="h5" >Coaching Is a Powerful Management Tool, but Not Everyone Can Be Coached</Card.Header>
                <br />
                <Image/>
                <br />
                <Card.Title></Card.Title>
              <Controls/>
              </Card>
              <br />
              <br />


              <Card border="dark" style={{ width: '38rem' }}>
              <Card.Header as="h5" >How to Become a Project Manager in 6 Easy Steps</Card.Header>
              <Card.Body> 
              <Image2/>
              <br />
              <Card.Title></Card.Title>
              <Controls2/>
              </Card.Body>
              </Card>
              <br />
              <br />

              <Card  border="dark" style={{ width: '38rem' }}>
              <Card.Header as="h5">3 Essential Project Management Methodologies to Run <br/> a Successful Project</Card.Header>
              <Image3/>
              <br/>
              <Card.Title> </Card.Title>
             
              <Controls3/>
              </Card>
              <br />
              <br />



              </div>
            </div>
          </Col>
        </Row>
        
      </div>
    </>
  )
}

// blogpost1
const Controls = () => {

  function bookAppointment() {
    window.location.href = "https://www.inc.com/bruce-eckfeldt/coaching-is-a-powerful-management-tool-but-not-everyone-can-be-coached.html?cid=sf01001/"
  }

  return (
    <>
    
      {/* <Button variant="primary" size="md" block>Six Steps for First Time Manager</Button> */}
      <Button variant="link" size="md" block onClick={bookAppointment}>Learn More</Button>
    </>
  )
}
const Image = () => (
	<img
	src = "https://cdn.pixabay.com/photo/2018/03/30/12/53/people-3275289__340.jpg"
	alt = ''
	/>
)

// blogpost2
const Controls2 = () => {

  function bookAppointment() {
    window.location.href = "https://blog.capterra.com/how-to-become-a-project-manager/"
  }

  return (
    <>
    
      {/* <Button variant="primary" size="md" block>Six Steps for First Time Manager</Button> */}
      <Button variant="link" size="md" block onClick={bookAppointment}>Learn More</Button>
    </>
  )
}
const Image2 = () => (
	<img
	src = "https://cdn.pixabay.com/photo/2014/09/21/10/58/manager-454866__340.jpg"
	alt = ''
	/>
)
// blogpost3
const Controls3 = () => {

  function bookAppointment() {
    window.location.href = "https://blog.capterra.com/essential-project-management-methodologies/"
  }

  return (
    <>
    
      {/* <Button variant="primary" size="md" block>Six Steps for First Time Manager</Button> */}
      <Button variant="link" size="md" block onClick={bookAppointment}>Learn More</Button>
    </>
  )
}
const Image3 = () => (
	<img
	src = "https://cdn.pixabay.com/photo/2016/03/17/17/25/modern-technologies-1263422__340.jpg"
	alt = ''
	/>
)





export default Blogs
