import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Servicedetails from './Components/Servicedetails/Servicedetails';
import Notfound from './Components/Notfound/Notfound';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Inventory></Inventory>}></Route>
        <Route path='/products/:id' element={<Servicedetails></Servicedetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
