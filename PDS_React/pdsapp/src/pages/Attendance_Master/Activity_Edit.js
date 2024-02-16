import React, { useState,useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

import Am_Service from '../../service/Am_Service';

export default function Activity_Edit() {
  const location=useLocation(); 
  const [formdetails,setformdetails] =useState({name:"",location:"",shift_time:""})
  const navigate=useNavigate();
  useEffect(()=>{
    setformdetails({...location.state.pdata})
  },[])
  const updateActivity=()=>{
    if(formdetails.ac_id==="" || formdetails.name===""||formdetails.location==="" || formdetails.shift_time===""){
       alert("pls fill all the fieds");
       return 
    }
    Am_Service.updateActivity(formdetails)
    .then((result)=>{
      console.log(result.data);
      //clear the form
      setformdetails({ac_id:"",name:"",location:"",shift_time:""});
      navigate("/activity_table")
    })
    .catch((err)=>{
      console.log("error occured",err);
    })
  }
  return (
    <div>
        <form>
  <div className="form-group">
    <label htmlFor="ac_id">AC Id :</label>
    <input type="text" className="form-control" id="ac_id" name="ac_id"
      value={formdetails.ac_id}
      onChange={(event)=>{setformdetails({...formdetails,ac_id:event.target.value})}}
      readOnly
    /> 
  </div>

  <div className="form-group">
    <label htmlFor="name">Name :</label>
    <input type="text" className="form-control" id="name" name="name"
      value={formdetails.name}
      onChange={(event)=>{setformdetails({...formdetails,name:event.target.value})}}
      readOnly
    /> 
  </div>


  <div className="form-group">
    <label htmlFor="location">Location :</label>
    <input type="text" className="form-control" id="location" name="location"
      value={formdetails.location}
      onChange={(event)=>{setformdetails({...formdetails,location:event.target.value})}}
    />  
  </div>
  
  <div className="form-group">
    <label htmlFor="shift_time">Shift Time :</label>
    <input type="text" className="form-control" id="shift_time" name="shift_time"
      value={formdetails.shift_time}
      onChange={(event)=>{setformdetails({...formdetails,shift_time:event.target.value})}}
    />
  </div>
  

  <button type="button" className="btn btn-primary" onClick={updateActivity}>Update</button>
</form>
    </div>
  )
}
