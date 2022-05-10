import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Servicedetails from './Components/Servicedetails/Servicedetails';
import Notfound from './Components/Notfound/Notfound';
import Navbar from './Components/Home/Navbar/Navbar';
import Signup from './Components/Signup/Signup';
import RequireAuth from './Components/RequireAuth';
import Blogs from './Components/Blogs/Blogs';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory' element={<RequireAuth><Inventory></Inventory></RequireAuth>}></Route>
        <Route path='/inventory/:id' element={<Servicedetails></Servicedetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
