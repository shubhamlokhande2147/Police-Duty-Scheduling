import React, {useEffect, useState}from 'react'
import { useLocation,useNavigate} from 'react-router-dom';
import Adm_Service from '../../service/Am_Service';
import Am_Service from '../../service/Am_Service';

export default function Police_Edit() {

  const [data,setData] = useState()
  // let activity ={
  //   ac_id:""
  // }
  const[formdetails,setformdetails]=useState({pid:"",belt_no:"",name:"",email_id:"",desg:"",dept:"",mobile:"",username:"",password:"",duty:"",activity :{ac_id:""}},)
  const location=useLocation(); 

  // const [id,setId] =useState();
  //const navigate=useNavigate();
  const navigate=useNavigate();
  useEffect(()=>{
    setformdetails({...location.state.pdata})
  },[])
  const updatePolice=()=>{
    console.log(formdetails)
    if(formdetails.pid===""||formdetails.belt_no===""||formdetails.name===""||formdetails.email_id===""||formdetails.desg===""||formdetails.dept===""||formdetails.mobile===""||formdetails.username===""||formdetails.password===""||formdetails.duty===""){
       alert("pls fill all the fieds");
       return 
    }
    Adm_Service.updatePolice(formdetails)
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
      <div style={{ display: "flex", justifyContent: "center" }}>
      <form  style={{width:"70%"}}>

  <div className="form-group">
    <label htmlFor="pid">PID :</label>
    <input type="text" className="form-control" id="pid" name="pid"
      value={formdetails.pid}
      onChange={(event)=>{setformdetails({...formdetails,pid:event.target.value})}}
      readOnly
    />
    
  </div>

  <div className="form-group">
    <label htmlFor="belt_no">Belt No. :</label>
    <input type="text" className="form-control" id="belt_no" name="belt_no"
      value={formdetails.belt_no}
      onChange={(event)=>{setformdetails({...formdetails,belt_no:event.target.value})}}
      readOnly
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
    <option value="IPS">IPS</option>
    <option value="IAS">IAS</option>
    <option value="AM">AM</option>
    <option value="POLICE">POLICE</option>
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


  <button type="button" className="btn btn-primary" onClick={updatePolice}>Update</button>
</form>
</div>

    </div>
  )
}
