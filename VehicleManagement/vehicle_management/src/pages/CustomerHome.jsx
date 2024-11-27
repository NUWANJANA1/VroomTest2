import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CustomerHome.css";

const CustomerHome = () => {
  const [vehicles, setVehicles] = useState([]);
  const navigate = useNavigate();

  // Fetch vehicles from the backend
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch("http://localhost:8080/vehicles"); // Replace with your backend API URL
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setVehicles(data);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div className="customer-home">
      <h1>Available Vehicles</h1>

      {/* Vehicles Grid */}
      <div className="vehicle-grid">
        {vehicles.length > 0 ? (
          vehicles.map((vehicle) => (
            <div key={vehicle.id} className="vehicle-card">
              <img
                src={vehicle.image || "default-image-url.jpg"} // Replace with a default image URL if needed
                alt={vehicle.model}
                className="vehicle-image"
              />
              <h3>{vehicle.model}</h3>
              <p>Registration Number: {vehicle.regNo}</p>
              <p>Type: {vehicle.type}</p>
              <p>Condition: {vehicle.cond}</p>
              <p>Rental Price: ${vehicle.rentalPrice}</p>
              <p>Availability: {vehicle.availability ? "Available" : "Unavailable"}</p>
            </div>
          ))
        ) : (
          <p>No vehicles available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerHome;
