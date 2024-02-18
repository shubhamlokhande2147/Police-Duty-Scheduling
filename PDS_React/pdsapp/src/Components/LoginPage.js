// import React from 'react'
// import 'LoginPage.css'

// export default function LoginPage() {
//   return (
//   //  <> <div>Login</div><input type="username"/><br></br>
//   //    <input type="username"/></> 

// //   <form>
// //   <h3>Sign In</h3>

// //   <div className="mb-3">
// //     <label>Email address</label>
// //     <input
// //       type="username"
// //       className="form-control"
// //       placeholder="Enter username"
// //     />
// //   </div>

// //   <div className="mb-3">
// //     <label>Password</label>
// //     <input
// //       type="password"
// //       className="form-control"
// //       placeholder="Enter password"
// //     /> 
// //   </div>

// //   <div className="mb-3">
// //     <div className="custom-control custom-checkbox">
// //       <input
// //         type="checkbox"
// //         className="custom-control-input"
// //         id="customCheck1"
// //       />
// //       <label className="custom-control-label" htmlFor="customCheck1">
// //         Remember me
// //       </label>
// //     </div>
// //   </div>

// //   <div className="d-grid">
// //     <button type="submit" className="btn btn-primary">
// //       Submit
// //     </button>
// //   </div>
// //   <p className="forgot-password text-right">
// //     Forgot <a href="#">password?</a>
// //   </p>
// // </form>

// <>
// <section className=" text-center text-lg-start">
//   {/* <style>
//     .rounded-t-5 {
//       border-top-left-radius: 0.5rem;
//       border-top-right-radius: 0.5rem;
//     }

//     .media (min-width: 992px) {
//       .rounded-tr-lg-0 {
//         border-top-right-radius: 0;
//       }

//       .rounded-bl-lg-5 {
//         border-bottom-left-radius: 0.5rem;
//       }
//     }
//   </style> */}
//   <div className="card mb-3">
//     <div className="row g-0 d-flex align-items-center">
//       {/* <div className="col-lg-4 d-none d-lg-flex">
//         <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
//           className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
//       </div> */}
//       <div className="col-lg-8">
//         <div className="card-body py-5 px-md-5">

//           <form method="post">
//             <div className="form-outline mb-4">
//               <label className="form-label" htmlFor="form2Example1">Enter username </label>
//               <input type="text" id="form2Example1" name="userName" className="form-control" />
//             </div>

//             <div className="form-outline mb-4">
//              <label className="form-label" htmlFor="form2Example2">Enter Password </label>
//              <input type="password" id="form2Example2" name="password" className="form-control" />
//             </div>

     

//             <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

//           </form>

//         </div>
//       </div>
//     </div>
//   </div>
// </section>
// </>
  
//   )
// }

//==========
// import React, { useState } from 'react';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Simulate login process here
//     // ...

//     // Clear input fields
//     setUsername('');
//     setPassword('');
//   };

//   return (
// <fieldset>
// <div className="container">
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="username"><b>Email:</b><input type="username" className="form-control" id="username" value={username} onChange={handleUsernameChange} />
// </label>
//         </div>
//         <div className="form-group">
//           <label htmlFor="password"><b>Password: </b><input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} />
// </label>
//         </div><br/>
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//     </div>
// </fieldset>

   
//   );
// };

// export default Login;

//=====================================================================

// import React, { useState } from 'react';
// import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Simulate login process here
//     // ...

//     // Clear input fields
//     setUsername('');
//     setPassword('');
//   };

//   return (
//     <Container className="d-flex justify-content-center mt-5">
//       <div style={{ width: 300, border: "1px solid #ced4da", padding: 20, borderRadius: 5 }}>
//         <h3 className="mb-4">Login</h3>
//         <Form onSubmit={handleSubmit}>
//           <FormGroup>
//             <Label for="username">Email:</Label>
//             <Input type="username" id="username" value={username} onChange={handleUsernameChange} />
//           </FormGroup>
//           <FormGroup>
//             <Label for="password">Password:</Label>
//             <Input type="password" id="password" value={password} onChange={handlePasswordChange} />
//           </FormGroup>
//           <Button type="submit" color="primary">Login</Button>
//         </Form>
//       </div>
//     </Container>
//   );
// };

// export default LoginPage;

//=========================================

import axios from 'axios';
import React, { useState } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserChange = (event) => {
    console.log(event.target.value)
    if("admin"){
      // axios.post
    }
    else if("atendance_master"){

    }
    else if("police"){

    }
    setUser(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
   
const uname = document.getElementById("username");
const pass = document.getElementById("password");
const userdata = document.getElementById("user");
console.log(uname);
console.log(pass);
console.log(userdata);


    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, user }),
      });



      if (response.ok) {
        // Redirect or handle successful login
        console.log('Login successful');
      } else {
        // Handle authentication failure
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }

    // Clear input fields
    setUsername('');
    setPassword('');
    setUser('');

  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <div style={{ width: 300, border: "1px solid #ced4da", padding: 20, borderRadius: 5 }}>
        <h3 className="mb-4">Login</h3>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="username">Username:</Label>
            <Input type="username" id="username" value={username} onChange={handleUsernameChange} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password:</Label>
            <Input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </FormGroup>

          <FormGroup>
            <Label for="user"> User:</Label>
             <select
              className="form-control"
              id="user"
              name="user"
              value={user} onChange={handleUserChange}
            >
              <option value="">Select Option</option>
              <option value="admin">Admin</option>
              <option value="atendance_master">Atendance_Master</option>
              <option value="police">Police</option>
            </select>
          </FormGroup>

    

          <Button type="submit" color="primary">Login</Button>
        </Form>
      </div>
    </Container>
  );
};

export default LoginPage;