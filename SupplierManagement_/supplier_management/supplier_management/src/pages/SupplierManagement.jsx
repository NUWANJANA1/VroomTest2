import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SupplierManagement() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    loadSuppliers();
  }, []);

  const loadSuppliers = async () => {
    try {
      const result = await axios.get("http://localhost:8080/suppliers");
      setSuppliers(result.data);
    } catch (error) {
      console.error("Error loading suppliers:", error);
    }
  };

  const deleteSupplier = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/supplier/${id}`);
      loadSuppliers();
    } catch (error) {
      console.error("Error deleting supplier:", error);
    }
  };

  const acceptSupplier = async (id) => {
    try {
      // Update supplier status to 'Accepted'
      await axios.put(`http://localhost:8080/supplier/${id}`, {
        status: "Accepted",
      });
      loadSuppliers();
    } catch (error) {
      console.error("Error accepting supplier:", error);
    }
  };

  const rejectSupplier = async (id) => {
    try {
      // Update supplier status to 'Rejected'
      await axios.put(`http://localhost:8080/supplier/${id}`, {
        status: "Rejected",
      });
      loadSuppliers();
    } catch (error) {
      console.error("Error rejecting supplier:", error);
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Supplier Management</h1>
        <table className="table shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">Mobile No</th>
              <th scope="col">NIC</th>
              <th scope="col">Description</th>
              <th scope="col">Registration No</th>
              <th scope="col">Model</th>
              <th scope="col">Type</th>
              <th scope="col">Condition</th>
              <th scope="col">Rental Price Range</th>
              <th scope="col">Time Duration</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier, index) => (
              <tr key={supplier.id}>
                <th scope="row">{index + 1}</th>
                <td>{supplier.fullName}</td>
                <td>{supplier.mobileNo}</td>
                <td>{supplier.nic}</td>
                <td>{supplier.description}</td>
                <td>{supplier.regNo}</td>
                <td>{supplier.model}</td>
                <td>{supplier.type}</td>
                <td>{supplier.cond}</td>
                <td>{supplier.rentalPriceRange}</td>
                <td>{supplier.timeDuration}</td>
                
                <td>
                  
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editsupplier/${supplier.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-success mx-2"
                    onClick={() => acceptSupplier(supplier.id)}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-warning mx-2"
                    onClick={() => rejectSupplier(supplier.id)}
                  >
                    Reject
                  </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
