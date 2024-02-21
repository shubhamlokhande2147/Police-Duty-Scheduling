import React, {useState}from 'react'
import {useNavigate} from 'react-router-dom';
import swal from "sweetalert";

import AdminService from '../../service/AdminService';


export default function Am_Registration() {
  const[formdetails,setformdetails]=useState({belt_no:"",name:"",email_id:"",mobile:"",username:"",password:""})
  const navigate=useNavigate();
  const addproduct=()=>{
  
    //validate name
    // if (!/(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$/.test(formdetails.name)) {
    //   swal("Enter valid name");
    //   return;
    // }
    
     // Validate email
     if (!/^[^#&\/\s@]+@[^#&\/\s@]+\.[^#&\/\s@]+$/.test(formdetails.email_id)) {
      swal("Please enter a valid email address.");
      return;
    }

      // Validate mobile number
      if (!/^\d{10,12}$/.test(formdetails.mobile)) {
        swal("Mobile number should be between 10 and 12 digits.");
        return; // Exit function if validation fails
      }

      //username 
    if (!/(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$/.test(formdetails.username)) {
      swal("Enter valid uername");
      return;
    }
       //password
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/.test(
        formdetails.password )) {
      swal(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit."
      );
      return;
    }

    if(formdetails.belt_no==="" || formdetails.name===""||formdetails.email_id==="" || formdetails.mobile===""||formdetails.username==="" || formdetails.password===""){
      alert("pls fill all the fieds");
       return 
    }


//------------------



    AdminService.addProduct(formdetails)
    .then((result)=>{
      console.log(result.data);
      //clear the form
      setformdetails({belt_no:"",name:"",email_id:"",mobile:"",username:"",password:""});
      navigate("/am_table")
    })
    .catch((err)=>{
      console.log("error occured",err);
    })
  }

 
  

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form  style={{width:"70%"}}>
  <div className="form-group">
    <label htmlFor="belt_no">Belt No. :</label>
    <input type="text" className="form-control" id="belt_no" name="belt_no" placeholder="Enter the Belt Number"

      value={formdetails.belt_no}
      onChange={(event)=>{setformdetails({...formdetails,belt_no:event.target.value})}}
    />
    
  </div>
  <div className="form-group">
    <label htmlFor="name">Name :</label>
      <input 
        type="text" 
        className="form-control" 
        id="name" 
        name="name"
        placeholder="Enter the Attendance_Master Name"
        required
        value={formdetails.name}
        onChange={(event) => {setformdetails({...formdetails, name: event.target.value})}}
      />
  </div>
  <div className="form-group">
    <label htmlFor="email_id">Email Id :</label>
    <input 
          type="email" 
          className="form-control" 
          id="email_id" 
          name="email_id"
          placeholder="Enter your email (e.g., example@gmail.com)"
          value={formdetails.email_id}
          onChange={(event) => {
            setformdetails({...formdetails, email_id: event.target.value})
          }}
        />
    
  </div>


  <div className="form-group">
    <label htmlFor="mobile">Mobile :</label>
    <input type="text" className="form-control" id="mobile" name="mobile"        placeholder="Enter the Mobile Number"
      value={formdetails.mobile}
      onChange={(event)=>{setformdetails({...formdetails,mobile:event.target.value})}}
    />
  </div>

  <div className="form-group">
    <label htmlFor="username">Username :</label>
    <input type="text" className="form-control" id="username" name="username" placeholder="Enter the Username"

      value={formdetails.username}
      onChange={(event)=>{setformdetails({...formdetails,username:event.target.value})}}
    />
    
  </div><div className="form-group">
    <label htmlFor="password">Password :</label>
    <input type="password" className="form-control" id="password" name="password" placeholder="Enter the Password"

      value={formdetails.password}
      onChange={(event)=>{setformdetails({...formdetails,password:event.target.value})}}
    />
  </div>




  <button type="button" className="btn btn-primary" style={{ marginTop: '4%' }} onClick={addproduct}>Register</button>
</form>
    </div>
  )
}
