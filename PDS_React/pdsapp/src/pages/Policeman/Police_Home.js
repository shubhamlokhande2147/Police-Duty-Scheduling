// import React from 'react'
// import {NavLink} from 'react-router-dom'
// import Nav from 'react-bootstrap/Nav';
// import { Link,useLocation } from 'react-router-dom'; // Assuming you are using React Router for navigation
// import { Navbar, Container, Image, Button  } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';




// export default function Police_Home() {
//   const navigate = useNavigate();
//   const location = useLocation();
 
//   // Access the state data from the location object
//   const { pid } = location.state || {};
// console.log(pid);

//   return (
//     <div>
//         <Navbar bg="dark" variant="dark" expand="lg">
//        <Container className="px-lg-5 py-2" >
//          <Navbar.Brand href="#home">Policeman</Navbar.Brand>
//          <Navbar.Toggle aria-controls="basic-navbar-nav" />
//          <Navbar.Collapse id="basic-navbar-nav">
//            <Nav className="me-auto">
        
//            <Nav.Link as={NavLink} to={{ pathname: '/police_leave', state: { pid: pid } }}>Apply_Leave</Nav.Link>
//              <Nav.Link href="#link">Duties</Nav.Link>
//              <Nav.Link href="#link">Emergency_Meet</Nav.Link>
//            </Nav>
//          </Navbar.Collapse>
//        </Container>
//        <Button className="btn btn-light"  style={{ marginRight: '3%' }} onClick={() => navigate("/login")}>Logout</Button>
//      </Navbar>
//      PID: {pid}
//     </div>
//   )
// }
import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';
import { Navbar, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Police_Home() {
  const navigate = useNavigate();
  const location = useLocation();

  // Access the state data from the location object
  // const { pid } = location.state || {};
  // console.log("PID in Police_Home:", pid);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="px-lg-5 py-2">
          <Navbar.Brand href="#home">Policeman</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link as={NavLink} to={{ pathname: '/police_leave', state: { pid: pid } }}>Apply_Leave</Nav.Link> */}
              <Nav.Link href="/police_leave">Apply_Leave</Nav.Link>

              <Nav.Link href="police_duty">Duties</Nav.Link>
              {/* <Nav.Link href="#emergency_meet">Emergency_Meet</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Button className="btn btn-light" style={{ marginRight: '3%' }} onClick={() => {navigate("/login")
          sessionStorage.setItem("pid","")
               }}>Logout</Button>
      </Navbar>
      {/* <p>PID: {pid}</p> */}
    </div>
  );
}
