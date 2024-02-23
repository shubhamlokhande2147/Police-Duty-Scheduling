import React, {useEffect, useState}from 'react'
import {useNavigate} from 'react-router-dom';
import Adm_Service from '../../service/Am_Service';
import Am_Service from '../../service/Am_Service';
import AM_Home from './AM_Home';


export default function Schedule_Duty() {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState('');
  
  const [polices, setPolices] = useState([]);
  const [selectedPolice, setSelectedPolice] = useState('');
  const [id,setid]=useState()

  const [fetchid,setfetchid] = useState('');
  const navigate=useNavigate();


  useEffect(() => {
    fetchActivities();
  }, []);

  

  const fetchActivities = async () => {
    try {

      const response = await Am_Service.getAllactivities();
      setActivities(response.data);
      console.log("shubham data " ,response.data)
      response.data.forEach(activity => {
        console.log("ac_id:", activity.ac_id); // Log the ac_id of each activity
      });

    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  };

  console.log(id)
  const handleActivityChange = (e) => {


    const ac_id =  document.getElementById("activity").value
    setfetchid(ac_id)
    console.log("sdv",ac_id)
    
    const activityId = e.target.value;
    console.log(activityId)
   
    setSelectedActivity(activityId);
    fetchPolices(activityId);
  };

  const fetchPolices = async (fetchid) => {
    try {
    
      console.log("fid",fetchid)
      const response = await Am_Service.getPolicesByActivity(fetchid);
      setPolices(response.data);

      console.log("police data",response.data)

    //   const pid = document.getElementById("policelist").value
    //   console.log("pid",pid)

    // response.data.forEach(police => {
    //     console.log("PID:", police.pid);
    //   });
    
    } catch (error) {
      console.error('Error fetching polices:', error);
    }
  };


  

  const submithandler = ()=>
  {

    console.log("fetchid",fetchid)
    console.log("selectedPolice" , selectedPolice)

    let obj = {"pid" : selectedPolice,
                "ac_id":fetchid }
    console.log("objectdata ",obj);
    Adm_Service.addDuty(obj).then((res)=>console.log("res" , res))  
    navigate("/police_table")
  
    
  }




  return (
    <div>
        <AM_Home></AM_Home>
        <br></br>
      
    <div style={{marginTop:"2%"}}> <h2>Schedule Duty</h2></div> 

<div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', width: '70%' }}>
          {/* Image */}
          <div style={{ flex: '1' }}>
            <img src="../images/Schedule.png" alt="Your Image" style={{ maxWidth: '100%', height: 'auto', marginTop:"30px" }} />
          </div>
          
          
          <form style={{ flex: '2', marginLeft: '20px' }}>

         
         
          <div className="form-group" style={{ marginTop:"10px" }}  >
            <label htmlFor="activity">Activity:</label>
            <select
              className="form-control"
              id="activity"
              name="activity"
            //   value={selectedActivity}
              onChange={handleActivityChange}
            >
              <option value="">Select Activity</option>
              {activities.map((activity) => (
                <option key={activity.id} id={activity.id} value={activity.ac_id}>{activity.name}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="policelist">Police List:</label>
            <select
              className="form-control"
              id="policelist"
              name="policelist"
             // value={selectedPolice}
              onChange={(e) => setSelectedPolice(e.target.value)}
              
            >
              <option value="">Select Police</option>
              {polices.map((police) => (
                <option key={police.pid} id={police.pid} value={police.pid}>{police.name}</option>
              ))}
            </select>
          </div>
          <button type="button" className="btn btn-primary" style={{ marginTop: '4%' }} onClick={submithandler}>Schedule</button>

        </form>
      </div>
    </div> </div>
  );
}

