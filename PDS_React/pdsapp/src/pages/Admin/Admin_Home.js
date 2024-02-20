import React from 'react'
import {NavLink} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { Navbar, Container, Image  } from 'react-bootstrap';



export default function Admin_Home() {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
       <Container className="px-lg-5 py-2" >
         <Navbar.Brand href="#home">Admin</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
             <Nav.Link href="am_table">Attendance_Masters</Nav.Link>
             <Nav.Link href="#link">Duties</Nav.Link>
             <Nav.Link href="#link">Emergency_Meet</Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>

     <div dangerouslySetInnerHTML={{__html: '<marquee><b style="background-color:blue;color:white">**Chaturshringi Police Station, Shivajinagar, Pune**</b></marquee>'}} />

    </div>
  )
}
