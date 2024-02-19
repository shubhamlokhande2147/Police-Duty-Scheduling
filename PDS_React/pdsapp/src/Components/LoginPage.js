
import axios from 'axios';
import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import LoginService from '../service/LoginService';


const LoginPage = () => {
  const [login, setlogin] = useState();





  const handleSubmit = async (event) => {
    event.preventDefault();
   
const uname = document.getElementById("username").value
const pass = document.getElementById("password").value
console.log(uname,pass);

let obj = {username : uname, password : pass}
//setlogin(obj)


    try {
      const response = await LoginService.LoginUser(obj)
      console.log(response.data)
      

      if (response.data === "Message Login Success") {
        // Redirect or handle successful login

        console.log('Login successful');
      // } else {
      //   // Handle authentication failure
      //   console.error('Login failed');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }

  

  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <div style={{ width: 300, border: "1px solid #ced4da", padding: 20, borderRadius: 5 }}>
        <h3 className="mb-4">Login</h3>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="username">Username:</Label>
            <Input type="username" id="username"/>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password:</Label>
            <Input type="password" id="password"/>
          </FormGroup>    

          <Button type="submit" color="primary">Login</Button>
        </Form>
      </div>
    </Container>
  );
};

export default LoginPage;

