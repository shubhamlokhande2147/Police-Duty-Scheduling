import React, {useEffect, useState}from 'react'
import {useNavigate} from 'react-router-dom';
import Adm_Service from '../../service/Am_Service';
import Am_Service from '../../service/Am_Service';
import swal from "sweetalert";
import AM_Home from './AM_Home';


export default function Police_Registration() {

  const [data,setData] = useState()
  // let activity ={
  //   ac_id:""
  // }
  const[formdetails,setformdetails]=useState({belt_no:"",name:"",email_id:"",desg:"",dept:"",mobile:"",username:"",password:"",duty:"",activity :{ac_id:""}},)
  
  // const [id,setId] =useState();
  const navigate=useNavigate();
  const addPolice=()=>{



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
      swal("Enter valid username");
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




    console.log(formdetails)
    if(formdetails.belt_no===""||formdetails.name===""||formdetails.email_id===""||formdetails.desg===""||formdetails.dept===""||formdetails.mobile===""||formdetails.username===""||formdetails.password===""||formdetails.duty===""){
       alert("pls fill all the fieds");
       return 
    }
    Adm_Service.addPolice(formdetails)
    .then((result)=>{
      console.log(result.data);
      console.log(formdetails.activity.ac_id)
      //clear the form
      // setformdetails({belt_no:"",name:"",email_id:"",desg:"",dept:"",mobile:"",username:"",password:"",duty:"",activity:""});
      navigate("/police_table")
    })
    .catch((err)=>{
      console.log(formdetails.activity.ac_id)
      console.log("error occured",err);
    })
  }


  //==========================
  //for get activities name
  useEffect(()=>{
    Am_Service.getAllactivities().then(res=>{
      setData([...res.data])
      console.log(res.data)
    })
  },[])



  return (
    <div>
      <AM_Home></AM_Home>
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
<div style={{ width: '50%', padding: '20px' }}>
  <img src="../images/Signup.png" alt="Logo" style={{ width: '100%' }} />
</div> 

      <form  style={{width:"70%"}}>
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


  {/* <div className="form-group">
    <label htmlFor="desg">Designation :</label>
    <input type="text" className="form-control" id="desg" name="desg"
      value={formdetails.desg}
      onChange={(event)=>{setformdetails({...formdetails,desg:event.target.value})}}
    />
  </div> */}

  <div className="form-group">
  <label htmlFor="desg">Designation:</label>
  <select
    className="form-control"
    id="desg"
    name="desg"
    value={formdetails.desg}
    onChange={(event) => { setformdetails({ ...formdetails, desg: event.target.value }) }}
  >
    <option value="">Select Option</option>
    <option value="Constable">Constable</option>
    <option value="Headconstable">Headconstable</option>
    <option value="PSI">PSI</option>
    <option value="PI">PI</option>
  </select>
</div>


  <div className="form-group">
    <label htmlFor="dept">Department :</label>
    <input type="text" className="form-control" id="dept" name="dept"
      value={formdetails.dept}
      onChange={(event)=>{setformdetails({...formdetails,dept:event.target.value})}}
    />
  </div>
  
  <div className="form-group">
    <label htmlFor="mobile">Mobile :</label>
    <input type="mobile" className="form-control" id="mobile" name="mobile"
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


  {/* <div className="form-group">
    <label htmlFor="duty">Duty :</label>
    <input type="text" className="form-control" id="duty" name="duty"
      value={formdetails.duty}
      onChange={(event)=>{setformdetails({...formdetails,duty:event.target.value})}}
    />
  </div> */}

  <div className="form-group">
  <label htmlFor="duty">Duty:</label>
  <select
    className="form-control"
    id="duty"
    name="duty"
    value={formdetails.duty}
    onChange={(event) => { setformdetails({ ...formdetails, duty: event.target.value }) }}
 >
  <option value="">Select Option</option>
    <option value="Fixed">Fixed</option>
    <option value="Unfixed">Unfixed</option>
  </select>
</div>

  
  {/* <div className="form-group">
    <label htmlFor="activity">Activity :</label>
    <input type="text" className="form-control" id="activity" name="activity"
      value={formdetails.activity}
      onChange={(event)=>{setformdetails({...formdetails,activity:event.target.value})}}
    />
  </div> */}

  <div className="form-group">
  <label htmlFor="activity">Activity:</label>
  
  <select
    className="form-control"
    id="activity"
    name="activity"
    // value={formdetails.activity}
    onChange={(event) =>
       {setformdetails({ ...formdetails, activity: { ...formdetails.activity, ac_id: event.target.value } });

  }}
  >
    <option value="">Select Option</option>
    {data?.map((item) => (
    <option key={item.id} value={item.ac_id}>{item.name}</option>
  ))}
  </select>

</div>


  <button type="button" className="btn btn-primary" style={{ marginTop: '4%' }} onClick={addPolice}>Register</button>
</form>
</div>

    </div>
  )
}
