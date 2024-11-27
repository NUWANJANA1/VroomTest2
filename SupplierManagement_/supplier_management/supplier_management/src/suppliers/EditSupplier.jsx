import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditSupplier() {
  let navigate = useNavigate();
  const { id } = useParams();

  // Initial state for supplier
  const [supplier, setSupplier] = useState({
    fullName: "",
    mobileNo: "",
    address: "",
    nic: "",
    photo: null, // Assuming the photo will be uploaded as a file
  });

  const { fullName, mobileNo, address, nic, photo } = supplier;

  const onInputChange = (e) => {
    setSupplier({ ...supplier, [e.target.name]: e.target.value });
  };

  const onFileChange = (e) => {
    setSupplier({ ...supplier, photo: e.target.files[0] }); // Storing the photo file
  };

  useEffect(() => {
    loadSupplier();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("mobileNo", mobileNo);
    formData.append("address", address);
    formData.append("nic", nic);
    if (photo) {
      formData.append("photo", photo); // Append photo if provided
    }

    // Make PUT request to update the supplier details
    try {
      await axios.put(`http://localhost:8080/supplier/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      });
      navigate("/admin"); // Redirect to admin page after successful update
    } catch (error) {
      console.error("Error updating supplier", error);
    }
  };

  const loadSupplier = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/supplier/${id}`);
      setSupplier(result.data);
    } catch (error) {
      console.error("Error fetching supplier data", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Supplier</h2>
          <form onSubmit={onSubmit}>
            {/* Full Name */}
            <div className="mb-3">
              <label htmlFor="FullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter supplier full name"
                name="fullName"
                value={fullName}
                onChange={onInputChange}
              />
            </div>

            {/* Mobile Number */}
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
              />
            </div>

            {/* Address */}
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <textarea
                className="form-control"
                placeholder="Enter supplier address"
                name="address"
                value={address}
                onChange={onInputChange}
              ></textarea>
            </div>

            {/* NIC */}
            <div className="mb-3">
              <label htmlFor="Nic" className="form-label">
                NIC Number
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter NIC number"
                name="nic"
                value={nic}
                onChange={onInputChange}
              />
            </div>

            {/* Photo Upload */}
            <div className="mb-3">
              <label htmlFor="Photo" className="form-label">
                Upload Photo
              </label>
              <input
                type="file"
                className="form-control"
                name="photo"
                onChange={onFileChange}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>

            {/* Cancel Button */}
            <Link className="btn btn-outline-danger mx-2" to="/admin">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
