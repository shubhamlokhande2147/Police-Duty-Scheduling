import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'

import AdminService from '../../service/AdminService';


export default function AM_Table() {

  const [plist,setplist]=useState([]);
  const fetchdata=()=>{
    AdminService.getAllproducts()
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
 const deleteProduct=(am_id)=>{
    AdminService.deleteProduct(am_id)
  .then((result)=>{
    console.log(result.data);
    fetchdata()
  })
  .catch(()=>{})

 }

  return (
    <div>
    <br></br>
    <Link to="/form">
       <button type="button" name="btn" id="btn" className="btn btn-success"> Add new Attendance_Master</button>
    </Link>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">AM Id</th>
      <th scope="col">Belt No.</th>
      <th scope="col">Name</th>
      <th scope="col">Email Id</th>
      <th scope="col">Mobile</th>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
      <th>action</th>
    </tr>
  </thead>
  <tbody>
    {plist.map((ob)=><tr>
      <td >{ob.am_id}</td>
      <td >{ob.belt_no}</td>
      <td>{ob.name}</td>
      <td>{ob.email_id}</td>
      <td>{ob.mobile}</td>
      <td>{ob.username}</td>
      <td>{ob.password}</td>
      <td> 

         <button type="button" name="btn" id="delete"  className="btn btn-danger" onClick={()=>{deleteProduct(ob.am_id)}}>delete</button>&nbsp;&nbsp;&nbsp;
        <Link to={`/edit/${ob.am_id}`} state={{pdata:ob}}>
        <button type="button" name="btn" id="edit" className="btn btn-primary">edit</button>&nbsp;&nbsp;&nbsp;
        </Link>
        <Link to={`/view/${ob.am_id}`}>
        <button type="button" name="btn" id="view" className="btn btn-info">view</button>
        </Link> 
      </td>
    </tr>)}
    
  </tbody>
</table>
    </div>
  )
}
