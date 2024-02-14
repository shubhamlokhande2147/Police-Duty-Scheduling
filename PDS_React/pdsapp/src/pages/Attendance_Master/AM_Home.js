import React from 'react'
import {NavLink} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { Navbar, Container, Image  } from 'react-bootstrap';



export default function AM_Home() {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
       <Container className="px-lg-5 py-2" >
         <Navbar.Brand href="#home">Attendance Master</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
             <Nav.Link href="#home">Register Policeman</Nav.Link>
             <Nav.Link href="addactivity">Add Activity</Nav.Link>
             <Nav.Link href="#link">Schedule Duty</Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
    </div>
  )
}
