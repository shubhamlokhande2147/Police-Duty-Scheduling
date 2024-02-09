import React from 'react'
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { Navbar, Container, Image  } from 'react-bootstrap';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function HomeComponent() {
  return (
   

    // <Navbar bg="dark" variant="dark" expand="lg">
    //   <Container className="px-lg-5">
    //     <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <>
    {/* <Container className="py-4">
      <Row className="gx-lg-5">
        <Col lg={6} xxl={4} mb={5}>
          <Card className="bg-light border-0 h-100">
            <Card.Body className="text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                <i className="bi bi-collection"></i>
              </div>
              <h2 className="fs-4 fw-bold">Fresh new layout</h2>
              <p className="mb-0">With Bootstrap 5, we've created a fresh new layout for this template!</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xxl={4} mb={5}>
          <Card className="bg-light border-0 h-100">
            <Card.Body className="text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                <i className="bi bi-cloud-download"></i>
              </div>
              <h2 className="fs-4 fw-bold">Free to download</h2>
              <p className="mb-0">As always, Start Bootstrap has a powerful collectio of free templates.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xxl={4} mb={5}>
          <Card className="bg-light border-0 h-100">
            <Card.Body className="text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                <i className="bi bi-card-heading"></i>
              </div>
              <h2 className="fs-4 fw-bold">Jumbotron hero header</h2>
              <p className="mb-0">The heroic part of this template is the jumbotron hero header!</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xxl={4} mb={5}>
          <Card className="bg-light border-0 h-100">
            <Card.Body className="text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                <i className="bi bi-bootstrap"></i>
              </div>
              <h2 className="fs-4 fw-bold">Feature boxes</h2>
              <p className="mb-0">We've created some custom feature boxes using Bootstrap icons!</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xxl={4} mb={5}>
          <Card className="bg-light border-0 h-100">
            <Card.Body className="text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                <i className="bi bi-code"></i>
              </div>
              <h2 className="fs-4 fw-bold">Simple clean code</h2>
              <p className="mb-0">We keep our dependencies up to date and squash bugs as they come!</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xxl={4} mb={5}>
          <Card className="bg-light border-0 h-100">
            <Card.Body className="text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                <i className="bi bi-patch-check"></i>
              </div>
              <h2 className="fs-4 fw-bold">A name you trust</h2>
              <p className="mb-0">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container> */}
    </>
  )
}
