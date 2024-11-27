import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function ViewVehicle() {
  const [vehicle, setVehicle] = useState({
    regNo: "",
    model: "",
    type: "",
    cond: "",
    rentalPrice: "",
    availability: "",
  });

  const [notification, setNotification] = useState("");  // state for notifications
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadVehicle();
  }, []);

  const loadVehicle = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/vehicle/${id}`);
      setVehicle(result.data);
    } catch (error) {
      setNotification("Failed to load vehicle details.");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/vehicle/${id}`);
      setNotification("Vehicle deleted successfully.");
      navigate("/admin");  
    } catch (error) {
      setNotification("Error deleting vehicle.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Vehicle Details</h2>

          {notification && (
            <div className="alert alert-info">{notification}</div>
          )}

          <div className="card">
            <div className="card-header">
              Details of vehicle id: {vehicle.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>RegNo:</b> {vehicle.regNo}</li>
                <li className="list-group-item"><b>Model:</b> {vehicle.model}</li>
                <li className="list-group-item"><b>Type:</b> {vehicle.type}</li>
                <li className="list-group-item"><b>Condition:</b> {vehicle.cond}</li>
                <li className="list-group-item"><b>Rental Price:</b> {vehicle.rentalPrice}</li>
                <li className="list-group-item"><b>Availability:</b> {vehicle.availability}</li>
              </ul>
            </div>
          </div>

          <button className="btn btn-danger my-2" onClick={handleDelete}>
            Delete Vehicle
          </button>
          <Link className="btn btn-primary my-2" to={"/admin"}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
