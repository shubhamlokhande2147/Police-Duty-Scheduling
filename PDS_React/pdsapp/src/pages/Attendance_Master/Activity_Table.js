import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'

import Am_Service from '../../service/Am_Service';
import AM_Home from './AM_Home';


export default function Activity_Table() {

  const [plist,setplist]=useState([]);
  const fetchdata=()=>{
    Am_Service.getAllactivities()
     .then((result)=>{
        console.log(result.data);
        setplist([...result.data])
     })
     .catch((err)=>{
        console.log("error occured",err)
     })
  }
  useEffect(()=>{
     fetchdata()

  },[])
 const deleteActivity=(ac_id)=>{
    Am_Service.deleteActivity(ac_id)
  .then((result)=>{
    console.log(result.data);
    fetchdata()
  })
  .catch(()=>{})

 }

  return (
    <div>
      <AM_Home></AM_Home>
    <br></br>
    <Link to="/addactivity">
       <button type="button" name="btn" id="btn" style={{ marginBottom: '3%' }} className="btn btn-success"> Add new Activity</button>
    </Link>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">AC Id</th>
      <th scope="col">Name</th>
      <th scope="col">Location</th>
      <th scope="col">Shift Time</th>
      <th>action</th>
    </tr>
  </thead>
  <tbody>
    {plist.map((ob)=><tr>
      <td >{ob.ac_id}</td>
      <td>{ob.name}</td>
      <td>{ob.location}</td>
      <td>{ob.shift_time}</td>
      <td> 

         <button type="button" name="btn" id="delete"  className="btn btn-danger" onClick={()=>{deleteActivity(ob.ac_id)}}>delete</button>&nbsp;&nbsp;&nbsp;
        <Link to={`/edit_activity/${ob.ac_id}`} state={{pdata:ob}}>
        <button type="button" name="btn" id="edit_activity" className="btn btn-primary">edit</button>&nbsp;&nbsp;&nbsp;
        </Link>
        {/* <Link to={`/view/${ob.ac_id}`}>
        <button type="button" name="btn" id="view" className="btn btn-info">view</button>
        </Link>  */}
      </td>
    </tr>)}
    
  </tbody>
</table>
    </div>
  )
}
