import React, { useState,useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

import PoliceService from '../../service/PoliceService';

export default function Police_Leave() {
  const location=useLocation(); 
  const [formdetails,setformdetails] =useState({fromDate:"",toDate:"",reason:""})
  const navigate=useNavigate();
//   useEffect(()=>{
//     setformdetails({...location.state.pdata})
//   },[])
  const updateLeave=()=>{
    if(formdetails.lvId==="" || formdetails.fromDate===""||formdetails.toDate==="" || formdetails.reason===""){
       alert("pls fill all the fieds");
       return 
    }
    PoliceService.updateLeave(formdetails)
    .then((result)=>{
      console.log(result.data);
      //clear the form
      setformdetails({lvId:"",fromDate:"",toDate:"",reason:""});
      navigate("/police_home")
    })
    .catch((err)=>{
      console.log("error occured",err);
    })
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
    <form  style={{width:"70%"}}>

  <div className="form-group">
    <label htmlFor="lvId">ld :</label>
    <input type="text" className="form-control" id="lvId" name="lvId"
      value={formdetails.lvId}
      onChange={(event)=>{setformdetails({...formdetails,lvId:event.target.value})}}
    /> 
  </div>

  <div className="form-group">
    <label htmlFor="fromDate">From Date :</label>
    <input type="text" className="form-control" id="fromDate" name="fromDate"
      value={formdetails.fromDate}
      onChange={(event)=>{setformdetails({...formdetails,fromDate:event.target.value})}}
      placeholder="YYYY-MM-DD"
    /> 
  </div>


  <div className="form-group">
    <label htmlFor="toDate">To Date :</label>
    <input type="text" className="form-control" id="toDate" name="toDate"
      value={formdetails.toDate}
      onChange={(event)=>{setformdetails({...formdetails,toDate:event.target.value})}}
      placeholder="YYYY-MM-DD"
    />  
  </div>
  
  <div className="form-group">
    <label htmlFor="reason">Reason :</label>
    <input type="text" className="form-control" id="reason" name="reason"
      value={formdetails.reason}
      onChange={(event)=>{setformdetails({...formdetails,reason:event.target.value})}}
    />
  </div>
  

  <button type="button" className="btn btn-primary" style={{ marginTop: '4%' }} onClick={updateLeave}>Apply Leave</button>
</form>
    </div>
  )
}
