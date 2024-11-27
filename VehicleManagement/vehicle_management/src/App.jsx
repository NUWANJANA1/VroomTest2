import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import CustomerHome from './pages/CustomerHome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddVehicle from './vehicles/AddVehicle';
import EditVehicle from './vehicles/EditVehicle';
import ViewVehicle from './vehicles/ViewVehicle';
import AdminLogin from './pages/AdminLogin';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          
          <Route exact path='/' element={<CustomerHome />} />
          
          
          <Route exact path='/admin' element={<Home />} />


          <Route exact path='/addvehicle' element={<AddVehicle />} />
          <Route exact path='/editvehicle/:id' element={<EditVehicle />} />
          <Route exact path='/viewvehicle/:id' element={<ViewVehicle />} />
          <Route exact path='/admin-login' element={<AdminLogin/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
