import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewSupplier() {
  const [supplier, setSupplier] = useState({
    regNo: "",
    name: "",
    contact: "",
    address: "",
    email: "",
    availability: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadSupplier();
  }, []);

  const loadSupplier = async () => {
    const result = await axios.get(`http://localhost:8080/supplier/${id}`);
    setSupplier(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Supplier Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Supplier ID: {supplier.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Registration Number:</b> {supplier.regNo}
                </li>
                <li className="list-group-item">
                  <b>Name:</b> {supplier.name}
                </li>
                <li className="list-group-item">
                  <b>Contact Number:</b> {supplier.contact}
                </li>
                <li className="list-group-item">
                  <b>Address:</b> {supplier.address}
                </li>
                <li className="list-group-item">
                  <b>Email:</b> {supplier.email}
                </li>
                <li className="list-group-item">
                  <b>Availability Status:</b> {supplier.availability}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
