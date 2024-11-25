import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CustomerBookings.css';


const CustomerBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:8080/bookings/getAll');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  return (
    <div className="container">
      <h2>Customer Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Vehicle ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.vehicleId}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerBookings;
