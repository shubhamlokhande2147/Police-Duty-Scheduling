import React from 'react'
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { Navbar, Container, Image  } from 'react-bootstrap';
// import BigImage from './BigImage';

import '../Components/HomeComponent.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function HomeComponent() {
  return (
   <>
     <div>
     It is Home Component
   </div>
   <div className="App">
      <header>
        <h1>Welcome to Our Landing Page</h1>
      </header>
      {/* <BigImage /> */}
      <section className="cards">
        <Card 
          title="Card 1" 
          description="Description of card 1." 
          image="https://via.placeholder.com/15"
        />
        <Card 
          title="Card 2" 
          description="Description of card 2." 
          image="https://via.placeholder.com/150"
        />
        <Card 
          title="Card 3" 
          description="Description of card 3." 
          image="https://via.placeholder.com/150"
        />
      </section>
      <footer>
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
   
   </>
 

    
  )
}
