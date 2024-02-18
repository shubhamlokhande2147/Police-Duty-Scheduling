import React from 'react'
import { Navbar, Container, Image, Button  } from 'react-bootstrap';

import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
    
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 p5 d-flex justify-content-between align-items-center">
      <Container>
        <Navbar.Brand style={{ marginLeft: '3%' }} >
          <Image src="../images/Logo_Police.png" width="70" height="60" className="d-inline-block align-top" alt="Logo" />
          <span className="ml-2 p-4" >Police-Duty-Scheduling</span> 
        </Navbar.Brand>
      </Container>
      <Button className="btn btn-light"  style={{ marginRight: '3%' }} onClick={() => navigate("/login")}>Login</Button>
    </Navbar>

    
    </div>
  )
}

