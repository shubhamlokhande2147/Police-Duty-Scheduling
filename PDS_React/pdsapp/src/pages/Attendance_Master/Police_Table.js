import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'


import Adm_Service from '../../service/Am_Service';

export default function Police_Table() {

  const [plist,setplist]=useState([]);
  const fetchdata=()=>{
    Adm_Service.getAllpolices()
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
 const deletepolice=(pid)=>{
    Adm_Service.deletepolice(pid)
  .then((result)=>{
    console.log(result.data);
    fetchdata()
  })
  .catch(()=>{})

 }

  return (
    <div>
    <br></br>
    <Link to="/addpolice">
       <button type="button" name="btn" id="btn" className="btn btn-success"> Add new Police</button>
    </Link>

        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">PId</th>
      <th scope="col">Belt No.</th>
      <th scope="col">Name</th>
      {/* <th scope="col">Email Id</th> */}
      <th scope="col">Designation</th>
      <th scope="col">Department</th>
      <th scope="col">Mobile</th>
      {/* <th scope="col">Username</th>
      <th scope="col">Password</th> */}
      <th scope="col">Duty</th>
      {/* <th scope="col">Activity</th> */}
      <th>action</th>
    </tr>
  </thead>
  <tbody>
    {plist.map((ob)=><tr>
      <td >{ob.pid}</td>
      <td >{ob.belt_no}</td>
      <td>{ob.name}</td>
      {/* <td>{ob.email_id}</td> */}
      <td>{ob.desg}</td>
      <td>{ob.dept}</td>
      <td>{ob.mobile}</td>
      {/* <td>{ob.username}</td>
      <td>{ob.password}</td> */}
      <td>{ob.duty}</td>
      <td> 

         <button type="button" name="btn" id="deletepolice"  className="btn btn-danger" onClick={()=>{deletepolice(ob.pid)}}>delete</button>&nbsp;&nbsp;&nbsp;
        
        <Link to={`/edit_police/${ob.pid}`} state={{pdata:ob}}>
        <button type="button" name="btn" id="edit_police" className="btn btn-primary">edit</button>&nbsp;&nbsp;&nbsp;
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
