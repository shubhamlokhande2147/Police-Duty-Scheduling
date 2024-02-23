// import React, { useEffect, useState } from 'react';
// import Am_Service from '../../service/Am_Service'; // Import your service to fetch data
// import Police_Home from './Police_Home';

// export default function Police_Duty() {
//   const [dutyData, setDutyData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await Am_Service.getAllDuties(); // Assuming you have a service method to fetch duty data
//       setDutyData(response.data);
//     } catch (error) {
//       console.error('Error fetching duty data:', error);
//     }
//   };

//   return (
//     <div>
//       <Police_Home></Police_Home>
//       <br></br>
//       <h2>Duty Details</h2>
//       <table style={{ borderCollapse: 'collapse', width: '100%',textAlign:'center' }}>
//         <thead>
//           <tr>
//             <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>PID</th>
//             <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Activity</th>
//             <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Location</th>
//             <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Shift</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dutyData.map((duty) => (
//             <tr key={duty.dh_id}>
//               <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{duty.pid}</td>
//               <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{duty.activity}</td>
//               <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{duty.location}</td>
//               <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{duty.shift}</td>
//             </tr>
//           ))}
//           <tr>
//               <td>ghhj</td>
//               <td>ghjk</td>
//               <td>vbnm,.</td>
//               <td>dfghj</td>
//             </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import Am_Service from '../../service/Am_Service'; // Import your service to fetch data
import Police_Home from './Police_Home';
//import dutyImage from '../../images/duty_image.jpg'; // Import your duty image

export default function Police_Duty() {
  const [dutyData, setDutyData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await Am_Service.getAllDuties(); // Assuming you have a service method to fetch duty data
      setDutyData(response.data);
    } catch (error) {
      console.error('Error fetching duty data:', error);
    }
  };

  return (
    <div>
      <Police_Home />
      <br />
      <h2 style={{ textAlign: 'center' }}>Duty Details</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="../images/Duty.png" alt="Duty" style={{ width: '50%', marginRight: '20px' }} />
        <table style={{ borderCollapse: 'collapse', width: '50%', textAlign: 'center', marginTop:'20px', marginRight :'30px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>PID</th>
              <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Activity</th>
              <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Location</th>
              <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', padding: '8px', textAlign: 'left' }}>Shift</th>
            </tr>   <tr>
               <td>31</td>
               <td>Damini Marshal</td>
               <td>Pune</td>
               <td>Night</td>
             </tr>
          </thead>
          <tbody>
            {dutyData.map((duty) => (
              <tr key={duty.dh_id}>
                <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{duty.pid}</td>
                <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{duty.activity}</td>
                <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{duty.location}</td>
                <td style={{ border: '1px solid #dddddd', padding: '8px' }}>{duty.shift}</td>
              </tr>
            ))}
          
          </tbody>
        </table>
      </div>
    </div>
  );
}
