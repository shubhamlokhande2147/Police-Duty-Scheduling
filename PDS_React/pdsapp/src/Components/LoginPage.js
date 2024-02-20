
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import LoginService from '../service/LoginService';
import { useNavigate } from 'react-router-dom';

import Header from "../Components/Header"
const LoginPage = () => {
  const navigate=useNavigate()
  const [login, setLogin] = useState({});
  const [roleId, setRoleId] = useState(null); // State to store roleId

  useEffect(() => {
    // Fetch roleId from URL query parameter if present
    const params = new URLSearchParams(window.location.search);
    const roleIdParam = params.get('roleId');
    if (roleIdParam) {
      setRoleId(roleIdParam);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const uname = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const obj = { username: uname, password: pass };

    try {
      const response = await LoginService.LoginUser(obj);
      console.log(response.data);

      
      if (response.data.roleId === 1) {
        // Navigate to "/am_master_home"
        console.log(response.data)
        navigate("/admin_home")
        // return <Navigate to="am_master_home" />;
      }
      
        else if (response.data.roleId === 2) {
          // Navigate to "/am_master_home"
          console.log(response.data)
          navigate("/am_master_home")
          // return <Navigate to="am_master_home" />;
        }
        
        else if (response.data.roleId === 3) {
          // Navigate to "/am_master_home"
          console.log(response.data.pid)
          sessionStorage.setItem("pid",response.data.pid)
          navigate("/police_home") // data send to police_home
          //navigate("/police_home",  { state: { pid: response.data.pid } }) // data send to police_home
        }
       else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <>
    <Header></Header>
    <Container className="d-flex justify-content-center mt-5">
      <div style={{ width: 300, border: "1px solid #ced4da", padding: 20, borderRadius: 5 }}>
        <h3 className="mb-4">Login</h3>
        {/* Display roleId if present */}
        {roleId && (
          <div className="mb-4">
            <strong>Role ID:</strong> {roleId}
          </div>
        )}
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
    </>
  );
};

export default LoginPage;


