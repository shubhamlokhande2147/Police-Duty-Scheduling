import React from 'react'
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import { Navbar, Container, Image  } from 'react-bootstrap';
// import BigImage from './BigImage';

import '../Components/HomeComponent.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Header from './Header';

export default function HomeComponent() {
  return (
   <>
<Header></Header>
   <div className="landing-page">
        <main>
        <section className="info">
            {/* <h2>Learn More About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, nisl vel rhoncus ullamcorper, nibh odio bibendum nibh, nec volutpat nibh nibh vel nibh.</p> */}
                <p>
                Our Police duty Scheduling web application provides a comprehensive solution for managing and organizing policemen schedules efficiently.
                 Designing to meet the specific needs of law enforcement agencies, our application streamlines the process of scheduling duty shifts, ensuring optimal coverage and adherence to departmental requirements.
                </p>
                <p>
                  With advance features tailored for law enforcement operations, our applications offer intuitive tools for assigning shifts, managing officers and staff availability, and generating detailed duty rosters. 
                   By centralizing scheduling tasks and automating repetitive processes, our platform empowers police departments to optimize resource allocation and enhance operational effectiveness
                </p>
          </section>
         
          <div className='row'>
          <section className="cards col">
            <div className="card">
              <img src="https://via.placeholder.com/350x200.png?text=Card+1" alt="Card 1" />
              <h3>Card 1 Title</h3>
              <p>Card 1 Description</p>
            </div>
            <div className="card col">
              <img src="https://via.placeholder.com/350x200.png?text=Card+2" alt="Card 2" />
              <h3>Card 2 Title</h3>
              <p>Card 2 Description</p>
            </div>
            <div className="card col">
              <img src="https://via.placeholder.com/350x200.png?text=Card+3" alt="Card 3" />
              <h3>Card 3 Title</h3>
              <p>Card 3 Description</p>
            </div>
          </section>
          </div>
      
        </main>
     
      </div>
   </>
 

    
  )
}
