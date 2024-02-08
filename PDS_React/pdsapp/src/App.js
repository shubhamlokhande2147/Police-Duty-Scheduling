import HomeComponent from './pages/HomeComponent';
import Header from './Components/Header';

import './App.css';

import LoginPage from './pages/LoginPage';
import Footer from './Components/Footer';

function App() {
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
           <Header></Header>
  <HomeComponent></HomeComponent>
  <LoginPage></LoginPage>
  <Footer></Footer>
  
    </div>
  );
}

export default App;
