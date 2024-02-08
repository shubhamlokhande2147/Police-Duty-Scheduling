import React from 'react'
import { Navbar, Container, Image  } from 'react-bootstrap';

import './Header.css'
export default function Header() {
  return (
    <div>
       <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 p5" >
      <Container>
        <Navbar.Brand>
        <Image src="../images/Logo_Police.png" width="70" height="60" className="d-inline-block align-top" alt="Logo" />
          <span className="ml-2 p-4">Police-Duty-Scheduling</span>
        </Navbar.Brand>
      </Container>
    </Navbar>

    </div>
  )
}

