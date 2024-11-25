import React, { useState } from 'react';
import axios from 'axios';
// import '../style/CreateBookings.css';
import '../styles/CreateBookings.css';


const CreateBooking = () => {
  const [formData, setFormData] = useState({
    customerId: '',
    vehicleId: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/bookings/create', formData);
      alert('Booking created successfully!');
    } catch (error) {
      alert('Error creating booking: ' + error.message);
    }
  };

  return (
    <div className="container">
      <h2>Create Booking</h2>
      <form onSubmit={handleSubmit}>
        <label>Customer ID:</label>
        <input type="text" name="customerId" onChange={handleChange} required />
        <br/>
        <br/>
        <label>Vehicle ID:</label>
        <input type="text" name="vehicleId" onChange={handleChange} required />
        <br/>
        <br/>
        <label>Start Date:</label>
        <input type="date" name="startDate" onChange={handleChange} required />
        <br/>
        <br/>
        <label>End Date:</label>
        <input type="date" name="endDate" onChange={handleChange} required />
        <br/>
        <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateBooking;
