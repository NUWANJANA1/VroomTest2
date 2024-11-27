import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



export default function AddSupplier() {
  let navigate = useNavigate();

  const [supplier, setSupplier] = useState({
    fullName: "",
    mobileNo: "",
    nicDetails: "",
    description: "",
    vehicle: {
      regNo: "",
      model: "",
      type: "",
      cond: "",
      rentalPriceRange: "",
      timeDuration: "",
    },
  });

  const {
    fullName,
    mobileNo,
    nicDetails,
    description,
    vehicle: { regNo, model, type, cond, rentalPriceRange, timeDuration },
  } = supplier;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    if (name in supplier.vehicle) {
      setSupplier({
        ...supplier,
        vehicle: { ...supplier.vehicle, [name]: value },
      });
    } else {
      setSupplier({ ...supplier, [name]: value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/supplier", supplier);
    navigate('addsupplier');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Supplier Registration Form</h2>

          <form onSubmit={onSubmit}>
            {/* Supplier Details Section */}
            <h4 className="mb-3">Supplier Details</h4>
            <div className="mb-3">
              <label htmlFor="FullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter full name"
                name="fullName"
                value={fullName}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="MobileNo" className="form-label">
                Mobile Number
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter mobile number"
                name="mobileNo"
                value={mobileNo}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="NICDetails" className="form-label">
                NIC Details
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter NIC details"
                name="nicDetails"
                value={nicDetails}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                placeholder="Add any description about the supplier"
                name="description"
                value={description}
                onChange={onInputChange}
                rows="3"
              />
            </div>

            {/* Vehicle Details Section */}
            <h4 className="mb-3">Vehicle Details</h4>
            <div className="mb-3">
              <label htmlFor="RegNo" className="form-label">
                Registration Number
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter vehicle registration number"
                name="regNo"
                value={regNo}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Model" className="form-label">
                Model
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter vehicle model"
                name="model"
                value={model}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Type" className="form-label">
                Type
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter vehicle type"
                name="type"
                value={type}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Cond" className="form-label">
                Condition
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter vehicle condition"
                name="cond"
                value={cond}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="RentalPriceRange" className="form-label">
                Rental Price Range
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter rental price range"
                name="rentalPriceRange"
                value={rentalPriceRange}
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="TimeDuration" className="form-label">
                Time Duration to Be Rented
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter time duration for rental"
                name="timeDuration"
                value={timeDuration}
                onChange={onInputChange}
                required
              />
            </div>

            {/* Buttons */}
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/admin">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
