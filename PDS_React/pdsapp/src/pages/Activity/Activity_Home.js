import React, { useState,useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import AdminService from '../../service/AdminService';

export default function Activity_Edit() {
  const location=useLocation(); 
  const [formdetails,setformdetails] =useState({id:"",name:"",Location:"",Shift_Time:""})
  const navigate=useNavigate();
  useEffect(()=>{
    setformdetails({...location.state.pdata})
  },[])
  const updateproduct=()=>{
    if(formdetails.id==="" || formdetails.name===""||formdetails.Location==="" || formdetails.Shift_Time===""){
       alert("pls fill all the fieds");
       return 
    }
    AdminService.updateProduct(formdetails)
    .then((result)=>{
      console.log(result.data);
      //clear the form
      setformdetails({id:"",name:"",Location:"",Shift_Time:"",});
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
    <label htmlFor="id">Id:</label>
    <input type="text" className="form-control" id="id" name="id"
      value={formdetails.id}
      onChange={(event)=>{setformdetails({...formdetails,id:event.target.value})}}
      readOnly
    />
    
  </div>

  <div className="form-group">
    <label htmlFor="name">name.:</label>
    <input type="text" className="form-control" id="name" name="name"
      value={formdetails.name}
      onChange={(event)=>{setformdetails({...formdetails,name:event.target.value})}}
      readOnly
    />
    
  </div>
  <div className="form-group">
    <label htmlFor="Location">Name</label>
    <input type="text" className="form-control" id="Location" name="Location"
      value={formdetails.Location}
      onChange={(event)=>{setformdetails({...formdetails,Location:event.target.value})}}
    />
  </div>

  <div className="form-group">
    <label htmlFor="Shift_Time">Email Id</label>
    <input type="text" className="form-control" id="Shift_Time" name="Shift_Time"
      value={formdetails.Shift_Time}
      onChange={(event)=>{setformdetails({...formdetails,Shift_Time:event.target.value})}}
    />
    
  {/* </div>
  <div className="form-group">
    <label htmlFor="mobile">Mobile</label>
    <input type="text" className="form-control" id="mobile" name="mobile"
      value={formdetails.mobile}
      onChange={(event)=>{setformdetails({...formdetails,mobile:event.target.value})}}
    /> */}
  </div>

  {/* <div className="form-group">
    <label htmlFor="username">Username</label>
    <input type="text" className="form-control" id="username" name="username"
      value={formdetails.username}
      onChange={(event)=>{setformdetails({...formdetails,username:event.target.value})}}
    />
  </div>
  <div className="form-group">
    <label htmlFor="password">Mobile</label>
    <input type="password" className="form-control" id="password" name="password"
      value={formdetails.password}
      onChange={(event)=>{setformdetails({...formdetails,password:event.target.value})}}
    />
  </div> */}
  

  <button type="button" className="btn btn-primary" onClick={updateproduct}>Update</button>
</form>
    </div>
  )
}
