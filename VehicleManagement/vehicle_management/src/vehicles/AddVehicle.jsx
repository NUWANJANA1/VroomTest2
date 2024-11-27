import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddVehicle() {


    let navigate=useNavigate()
  const [vehicle, setVehicles] = useState({
    regNo: "",
    model: "",
    type: "",
    cond: "",
    rentalPrice: "",
    availability: "",
  });

  const { regNo, model, type, cond, rentalPrice, availability } = vehicle;

  const onInputChange = (e) => {
    setVehicles({ ...vehicle, [e.target.name]: e.target.value });
  };

  const onSubmit = async(e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/vehicle',vehicle)
    navigate("/admin")

  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Vehicle Registration Form</h2>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="RegNo" className="form-label">
                Registration Number
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter vehicle Registration Number"
                name="regNo"
                value={regNo}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Model" className="form-label">
                Model
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter vehicle Model"
                name="model"
                value={model}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Type" className="form-label">
                Type
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter vehicle Type"
                name="type"
                value={type}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Cond" className="form-label">
                Condition
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter vehicle current condition"
                name="cond"
                value={cond}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="RentalPrice" className="form-label">
                Rental Price
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter vehicle rental price"
                name="rentalPrice"
                value={rentalPrice}
                onChange={onInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Availability" className="form-label">
                Availability Status
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter vehicle availability status"
                name="availability"
                value={availability}
                onChange={onInputChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to='/admin'>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
