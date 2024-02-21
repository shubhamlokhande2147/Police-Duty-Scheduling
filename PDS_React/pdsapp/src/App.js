import { BrowserRouter as Router, Routes,Route, useLocation} from 'react-router-dom';



import './App.css';

import HomeComponent from './Components/HomeComponent';
import Header from './Components/Header';
import LoginPage from './Components/LoginPage';
import Footer from './Components/Footer';

import Admin_Home from './pages/Admin/Admin_Home';
import AM_Home from './pages/Attendance_Master/AM_Home';
import Police_Home from './pages/Policeman/Police_Home';

import Am_Registration from './pages/Admin/AM_Registration';
import AM_Table from './pages/Admin/AM_Table';
import AM_Edit from './pages/Admin/AM_Edit';

import Activity_Registration from './pages/Attendance_Master/Activity_Registration';
import Activity_Table from './pages/Attendance_Master/Activity_Table';
import Activity_Edit from './pages/Attendance_Master/Activity_Edit';

import Police_Registration from './pages/Attendance_Master/Police_Registration';
import Police_Table from './pages/Attendance_Master/Police_Table';
import Police_Edit from './pages/Attendance_Master/Police_Edit';
import Police_Leave from './pages/Policeman/Police_Leave';
import Leave_Table from './pages/Attendance_Master/Leave_Table';
import Schedule_Duty from './pages/Attendance_Master/Schedule_Duty';
import Police_Duty from './pages/Policeman/Police_Duty';


function App() {

  const form = useLocation();

  return (
    <div className="App">
     
      {/* <Header></Header> */}

      <Routes>  
        <Route path='/' element={
        <><HomeComponent></HomeComponent> <Footer></Footer></>}></Route> 
        <Route path="/login" element={<LoginPage/>}></Route>

        <Route path="/admin_home" element={<Admin_Home/>}/>
        <Route path="/am_master_home" element={<AM_Home/>}/>
        <Route path="/police_home" element={<Police_Home/>}/>


        <Route path="/am_table" element={<AM_Table/>}></Route>
        <Route path="/addnew" element={<Am_Registration/>}></Route>
        <Route path="/edit/:id" element={<AM_Edit/>}></Route>
  

        <Route path="/addactivity" element={<Activity_Registration/>}></Route>
        <Route path="/activity_table" element={<Activity_Table/>}></Route>
        <Route path="/edit_activity/:id" element={<Activity_Edit/>}></Route>


        <Route path="/addpolice" element={<Police_Registration/>}></Route>
        <Route path="/police_table" element={<Police_Table/>}></Route>
        <Route path="/edit_police/:id" element={<Police_Edit/>}></Route>

        <Route path="/police_leave" element={<Police_Leave/>}></Route>
        <Route path="/leave_table" element={<Leave_Table/>}></Route>
      
        <Route path="/schedule_duty" element={<Schedule_Duty/>}></Route>
        <Route path="/police_duty" element={<Police_Duty/>}></Route>


      </Routes> 
      
 
     </div>
  );
}

export default App;
