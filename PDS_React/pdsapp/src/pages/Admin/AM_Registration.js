import React, {useState}from 'react'
import {useNavigate} from 'react-router-dom';

import AdminService from '../../service/AdminService';


export default function Am_Registration() {
  const[formdetails,setformdetails]=useState({belt_no:"",name:"",email_id:"",mobile:"",username:"",password:""})
  const navigate=useNavigate();
  const addproduct=()=>{
    if(formdetails.belt_no==="" || formdetails.name===""||formdetails.email_id==="" || formdetails.mobile===""||formdetails.username==="" || formdetails.password===""){
       alert("pls fill all the fieds");
       return 
    }
    AdminService.addProduct(formdetails)
    .then((result)=>{
      console.log(result.data);
      //clear the form
      setformdetails({belt_no:"",name:"",email_id:"",mobile:"",username:"",password:""});
      navigate("/")
    })
    .catch((err)=>{
      console.log("error occured",err);
    })
  }
  return (
    <div>
      <form>
  <div className="form-group">
    <label htmlFor="belt_no">Belt No. :</label>
    <input type="text" className="form-control" id="belt_no" name="belt_no"
      value={formdetails.belt_no}
      onChange={(event)=>{setformdetails({...formdetails,belt_no:event.target.value})}}
    />
    
  </div>
  <div className="form-group">
    <label htmlFor="name">Name :</label>
    <input type="text" className="form-control" id="name" name="name"
      value={formdetails.name}
      onChange={(event)=>{setformdetails({...formdetails,name:event.target.value})}}
    />
  </div>
  <div className="form-group">
    <label htmlFor="email_id">Email Id :</label>
    <input type="email" className="form-control" id="email_id" name="email_id"
      value={formdetails.email_id}
      onChange={(event)=>{setformdetails({...formdetails,email_id:event.target.value})}}
    />
    
  </div>


  <div className="form-group">
    <label htmlFor="mobile">Mobile :</label>
    <input type="text" className="form-control" id="mobile" name="mobile"
      value={formdetails.mobile}
      onChange={(event)=>{setformdetails({...formdetails,mobile:event.target.value})}}
    />
  </div>

  <div className="form-group">
    <label htmlFor="username">Username :</label>
    <input type="text" className="form-control" id="username" name="username"
      value={formdetails.username}
      onChange={(event)=>{setformdetails({...formdetails,username:event.target.value})}}
    />
  </div><div className="form-group">
    <label htmlFor="password">Password :</label>
    <input type="password" className="form-control" id="password" name="password"
      value={formdetails.password}
      onChange={(event)=>{setformdetails({...formdetails,password:event.target.value})}}
    />
  </div>




  <button type="button" className="btn btn-primary" onClick={addproduct}>Register</button>
</form>
    </div>
  )
}
