import React from 'react'
import {NavLink} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { Navbar, Container, Image  } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function AM_Home() {
  const navigate = useNavigate();


  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
       <Container className="px-lg-5 py-2" >
         <Navbar.Brand href="#home">Attendance Master</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
             <Nav.Link href="police_table">Policemen</Nav.Link>
             <Nav.Link href="activity_table">Activity</Nav.Link>
             <Nav.Link href="leave_table">Leave</Nav.Link>
             <Nav.Link href="#link">Schedule Duty</Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Container>
       <Button className="btn btn-light" style={{ marginRight: '3%' }} onClick={() => navigate("/login")}>Logout</Button>

     </Navbar>
    </div>
  )
}
