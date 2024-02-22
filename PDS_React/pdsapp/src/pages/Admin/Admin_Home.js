import React from 'react'
import {NavLink} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { Navbar, Container, Image  } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// import image from "../../../public/images/Signup.png";
import Footer from "../../Components/Footer"

export default function Admin_Home() {
  const navigate = useNavigate();

  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
       <Container className="px-lg-5 py-2" >
         <Navbar.Brand href="#home">Admin</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
             <Nav.Link href="am_table">Attendance_Masters</Nav.Link>
             {/* <Nav.Link href="#link">Duties</Nav.Link>
             <Nav.Link href="#link">Emergency_Meet</Nav.Link> */}
           </Nav>
         </Navbar.Collapse>
       </Container>
       <Button className="btn btn-light" style={{ marginRight: '3%' }} onClick={() => navigate("/login")}>Logout</Button>
     </Navbar>

     <div dangerouslySetInnerHTML={{__html: '<marquee><b style="background-color:blue;color:white">**Chaturshringi Police Station, Shivajinagar, Pune**</b></marquee>'}} />
   <div>
   {/* <img src='PDS_React\pdsapp\public\images\logo.webp'> </img> */}
             <img src="../images/Logo_Police.png" className='mt-5 vh-90' />
   </div>
    {/* <Footer/> */}
    </div>
  )
}
