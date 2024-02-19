import React, {useState}from 'react'
import {useNavigate} from 'react-router-dom';

import Am_Service from '../../service/Am_Service';


export default function Activity_Registration() {
  const[formdetails,setformdetails]=useState({name:"",location:"",shift_time:""})
  const navigate=useNavigate();
  const addActivity=()=>{
    if(formdetails.name==="" || formdetails.location===""||formdetails.shift_time===""){
       alert("pls fill all the fieds");
       return 
    }
    Am_Service.addActivity(formdetails)
    .then((result)=>{
      console.log(result.data);
      //clear the form
      setformdetails({name:"",location:"",shift_time:""});
      navigate("/activity_table")
    })
    .catch((err)=>{
      console.log("error occured",err);
    })
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
    <form  style={{width:"70%"}}>
  <div className="form-group">
    <label htmlFor="name">Name :</label>
    <input type="text" className="form-control" id="name" name="name"
      value={formdetails.name}
      onChange={(event)=>{setformdetails({...formdetails,name:event.target.value})}}
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
    <input type="shift_time" className="form-control" id="shift_time" name="shift_time"
      value={formdetails.shift_time}
      onChange={(event)=>{setformdetails({...formdetails,shift_time:event.target.value})}}
    />
    
  </div>

  <button type="button" className="btn btn-primary" style={{ marginTop: '4%' }} onClick={addActivity}>Register</button>
</form>
    </div>
  )
}
