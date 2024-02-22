
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PoliceService from '../../service/PoliceService';
import Police_Home from './Police_Home';

export default function Police_Leave() {
  const [formdetails, setFormDetails] = useState({ fromDate: "", toDate: "", reason: "" });
  const navigate = useNavigate();
  const location = useLocation();
  //const pid = location.state?.pid || null;

  const pid = sessionStorage.getItem("pid")  // grt pid through sessionstorage
  console.log("pid = ",pid)

  const addLeave = () => {
    if (formdetails.fromDate === "" || formdetails.toDate === "" || formdetails.reason === "") {
      alert("Please fill in all the fields");
      return;
    }

    const requestData = {
      ...formdetails,
      pid: pid // Include pid in the request data

    }

   // console.log(requestData)

    PoliceService.addLeave(requestData)
      .then((result) => {
        console.log(result.data);
        setFormDetails({ fromDate: "", toDate: "", reason: ""});
        console.log(requestData)

        navigate("/police_home");
      })
      .catch((err) => {
        console.log("Error occurred", err);
      });
  }

  return (
//     <div>
//    <Police_Home></Police_Home>
//  <br></br>
//     <div style={{ display: "flex", justifyContent: "center" }}>
     
     
//       <form style={{ width: "70%" }}>
        
//         <div className="form-group">
//           <label htmlFor="fromDate">From Date :</label>
//           <input type="text" className="form-control" id="fromDate" name="fromDate"
//             value={formdetails.fromDate}
//             onChange={(event) => setFormDetails({ ...formdetails, fromDate: event.target.value })}
//             placeholder="YYYY-MM-DD"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="toDate">To Date :</label>
//           <input type="text" className="form-control" id="toDate" name="toDate"
//             value={formdetails.toDate}
//             onChange={(event) => setFormDetails({ ...formdetails, toDate: event.target.value })}
//             placeholder="YYYY-MM-DD"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="reason">Reason :</label>
//           <input type="text" className="form-control" id="reason" name="reason"
//             value={formdetails.reason}
//             onChange={(event) => setFormDetails({ ...formdetails, reason: event.target.value })}
//           />
//         </div>

//         <button type="button" className="btn btn-primary" style={{ marginTop: '4%' }} onClick={addLeave}>Apply Leave</button>
//       </form>
//     </div>

//     </div>

//   );
// }
<div>
      <Police_Home />
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '30%' }}>
          <img src="../images/Leave.png" alt="Logo" style={{ width: '100%' }} />
        </div>
        <div style={{ width: '70%', padding: '20px' }}>
          <form style={{ width: '100%' }}>
            <div className="form-group">
              <label htmlFor="fromDate">From Date :</label>
              <input
                type="text"
                className="form-control"
                id="fromDate"
                name="fromDate"
                value={formdetails.fromDate}
                onChange={event => setFormDetails({ ...formdetails, fromDate: event.target.value })}
                placeholder="YYYY-MM-DD"
              />
            </div>

            <div className="form-group">
              <label htmlFor="toDate">To Date :</label>
              <input
                type="text"
                className="form-control"
                id="toDate"
                name="toDate"
                value={formdetails.toDate}
                onChange={event => setFormDetails({ ...formdetails, toDate: event.target.value })}
                placeholder="YYYY-MM-DD"
              />
            </div>

            <div className="form-group">
              <label htmlFor="reason">Reason :</label>
              <input
                type="text"
                className="form-control"
                id="reason"
                name="reason"
                value={formdetails.reason}
                onChange={event => setFormDetails({ ...formdetails, reason: event.target.value })}
              />
            </div>

            <button type="button" className="btn btn-primary" style={{ marginTop: '4%' }} onClick={addLeave}>
              Apply Leave
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}