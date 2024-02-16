  import HomeComponent from './pages/HomeComponent';
import Header from './Components/Header';
import { Routes,Route, useLocation} from 'react-router-dom';



import './App.css';

import LoginPage from './pages/LoginPage';
import Footer from './Components/Footer';
import A_Master from './pages/Attendance_Master/AM_Home';
import Admin_Home from './pages/Admin/Admin_Home';
import Police_Home from './pages/Policeman/Police_Home';

import Am_Registration from './pages/Admin/AM_Registration';
import AM_Table from './pages/Admin/AM_Table';
import AM_Edit from './pages/Admin/AM_Edit';

import Activity_Registration from './pages/Attendance_Master/Activity_Registration';
import Activity_Table from './pages/Attendance_Master/Activity_Table';
import Activity_Edit from './pages/Attendance_Master/Activity_Edit';
import Police_Registration from './pages/Attendance_Master/Police_Registration';

function App() {

  const form = useLocation();

  return (
    <div className="App">
     {/* <Header></Header>
      <MainNavBar></MainNavBar>
      <Routes>
        <Route path="/home" element={<HomeComponent></HomeComponent>}></Route>
        <Route path="/table" element={<ProductTable></ProductTable>}></Route>
        <Route path="/form" element={<ProductForm></ProductForm>}></Route>
        <Route path="/list" element={<ProductList></ProductList>}></Route>
        <Route path="/edit/:id" element={<ProductEdit></ProductEdit>}></Route>
        <Route path="/view/:id" element={<ProductDetails></ProductDetails>}></Route>
      </Routes>
      <Footer></Footer> */}

 <A_Master></A_Master> 
   <Admin_Home></Admin_Home>   

      <Routes>
{/* <Route path="/home" element={<HomeComponent></HomeComponent>}></Route> */}
{/* <Route path="/table" element={<ProductTable></ProductTable>}></Route> */}
        <Route path="/am_table" element={<AM_Table/>}></Route>
        <Route path="/addnew" element={<Am_Registration/>}></Route>
        <Route path="/edit/:id" element={<AM_Edit/>}></Route>
  

        <Route path="/addactivity" element={<Activity_Registration/>}></Route>
        <Route path="/activity_table" element={<Activity_Table/>}></Route>
        <Route path="/edit_activity/:id" element={<Activity_Edit/>}></Route>


        {/* <Route path="/list" element={<ProductList></ProductList>}></Route>
        <Route path="/edit/:id" element={<ProductEdit></ProductEdit>}></Route>
        <Route path="/view/:id" element={<ProductDetails></ProductDetails>}></Route> */}
      </Routes>

  <Police_Registration></Police_Registration>

{/* 
           <Header></Header>

           <HomeComponent></HomeComponent>
           <Admin_Home></Admin_Home>

        
           <A_Master></A_Master> 


             <Police_Home></Police_Home>

           <LoginPage></LoginPage> 
           <Footer></Footer> 


           <Am_Registration></Am_Registration> */}
  
    </div>
  );
}

export default App;
