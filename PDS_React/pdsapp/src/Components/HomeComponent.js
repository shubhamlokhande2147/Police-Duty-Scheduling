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
              <img src="C:\Users\91702\Desktop\pdssss\Police-Duty-Scheduling\PDS_React\pdsapp\public\images\card1.jpeg" alt="Card 1" />
              <h3>"सद्रक्षणाय खलनिग्रहणाय"</h3>
              <p>This slogan refered from Bhagvat geeta and its meaning is "Maharashtra police protect guiltless and distroy 
harmful people by controlling them."
</p>
            </div>
            <div className="card col">
              <img src="C:\Users\91702\Desktop\pdssss\Police-Duty-Scheduling\PDS_React\pdsapp\public\images\card2.jpeg" alt="Card 2" />
              <h3>Determined</h3>
              <p>Our real heros is the real identity of our society . Maharashtra police is not just a name its a dedicated, tallented, bravery group
of police officers who not only protect us but maintain our daily life on track...our project is a small contribution to help them for scheduling their duty
in a easy way so that they will focus on major cases. Maharashtra police is a jersy of pride and emotions for all people for their work and dedication salute to 
police officers!</p>
            </div>
            <div className="card col">
              <img src="C:\Users\91702\Desktop\pdssss\Police-Duty-Scheduling\PDS_React\pdsapp\public\images\card3.jpg" alt="Card 3" />
              <h3>Patriotic</h3>
              <p>Smiling face of police officers is the satisfied emotions to our society cause they smile when their assigned duty is accomplish. they are the key root of our 
   society...proud to our heros.</p>
            </div>
          </section>
          </div>
      
        </main>
     
      </div>
   </>
 

    
  )
}
