import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/AdminBookings.css';


const AdminBookings = () => {
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

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:8080/bookings/updateStatus/${id}`, null, {
        params: { status },
      });
      fetchBookings();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const deleteBooking = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/bookings/delete/${id}`);
      fetchBookings();
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  return (
    <div className="container">
      <h2>Admin Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer ID</th>
            <th>Vehicle ID</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.customerId}</td>
              <td>{booking.vehicleId}</td>
              <td>{booking.status}</td>
              <td>
                <button onClick={() => updateStatus(booking.id, 'APPROVED')}>Approve</button>
                <button onClick={() => updateStatus(booking.id, 'REJECTED')}>Reject</button>
                <button onClick={() => deleteBooking(booking.id)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminBookings;
