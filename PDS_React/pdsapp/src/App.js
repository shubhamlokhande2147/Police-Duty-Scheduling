  import HomeComponent from './Components/HomeComponent';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes,Route, useLocation} from 'react-router-dom';



import './App.css';

import LoginPage from './Components/LoginPage';
import Footer from './Components/Footer';

import Admin_Home from './pages/Admin/Admin_Home';
import Am_Registration from './pages/Admin/AM_Registration';
import AM_Table from './pages/Admin/AM_Table';
import AM_Edit from './pages/Admin/AM_Edit';

import Activity_Registration from './pages/Attendance_Master/Activity_Registration';
import Activity_Table from './pages/Attendance_Master/Activity_Table';
import Activity_Edit from './pages/Attendance_Master/Activity_Edit';

import Police_Registration from './pages/Attendance_Master/Police_Registration';
import Police_Table from './pages/Attendance_Master/Police_Table';
import Police_Edit from './pages/Attendance_Master/Police_Edit';

function App() {

  const form = useLocation();

  return (
    <div className="App">
     
      <Header></Header>

      <Routes>  
        <Route path='/' element={
        <><HomeComponent></HomeComponent> <Footer></Footer></>}></Route> 
        <Route path="/login" element={<LoginPage/>}></Route>

        <Route path="/am_table" element={<AM_Table/>}></Route>
        <Route path="/addnew" element={<Am_Registration/>}></Route>
        <Route path="/edit/:id" element={<AM_Edit/>}></Route>
  

        <Route path="/addactivity" element={<Activity_Registration/>}></Route>
        <Route path="/activity_table" element={<Activity_Table/>}></Route>
        <Route path="/edit_activity/:id" element={<Activity_Edit/>}></Route>


        <Route path="/addpolice" element={<Police_Registration/>}></Route>
        <Route path="/police_table" element={<Police_Table/>}></Route>
        <Route path="/edit_police/:id" element={<Police_Edit/>}></Route>

      </Routes> 
    </div>
  );
}

export default App;
