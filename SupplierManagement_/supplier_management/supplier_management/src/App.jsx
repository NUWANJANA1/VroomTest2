import React, { Profiler } from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Correct import

import Navbar from './layout/Navbar';
import SupplierManagement from './pages/SupplierManagement';
import AddSupplier from './suppliers/AddSupplier';
import ViewSupplier from './suppliers/ViewSuppliers';
import EditSupplier from './suppliers/EditSupplier';
import SupplierVehicle from './pages/SupplierVehicle';
import Login from './pages/Login';
import Agreement from './pages/Agreement';
import Admin from './pages/Admin';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          
          <Route exact path='/' element={<SupplierManagement />} />
          <Route exact path='/addsupplier' element={<AddSupplier />} />
          <Route exact path='/editsupplier/:id' element={<EditSupplier />} />
          <Route exact path='/viewsupplier/:id' element={<ViewSupplier />} />
          <Route exact path='/supplier-vehicle' element={<SupplierVehicle />} />
          <Route exact path='/loginlogin' element={<Login />} />
          <Route exact path='/agreement' element={<Agreement />} />
          <Route exact path='/addsupplier' element={<AddSupplier />} />
          <Route exact path='/admin' element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
