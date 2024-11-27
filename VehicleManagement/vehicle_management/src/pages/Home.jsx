import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
    const [vehicles, setVehicles] = useState([]);

    const { id } = useParams(); // Fix typo here

    useEffect(() => {
        loadVehicles();
    }, []);

    const loadVehicles = async () => {
        try {
            const result = await axios.get("http://localhost:8080/vehicles");
            setVehicles(result.data);
        } catch (error) {
            console.error("Error loading vehicles:", error);
        }
    };

    const deleteVehicle = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/vehicle/${id}`);
            loadVehicles(); // Reload data after deletion
        } catch (error) {
            console.error("Error deleting vehicle:", error);
        }
    };

    return (
        <div className="container">
            
            <div className="py-4">

            <div>
                <Link className='btn btn-primary' to="/addvehicle"> Add Vehicle </Link>
                </div>
            
                <table className="table shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Registration No</th>
                            <th scope="col">Model</th>
                            <th scope="col">Type</th>
                            <th scope="col">Condition</th>
                            <th scope="col">Rental Price</th>
                            <th scope="col">Availability</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicles.map((vehicle, index) => (
                            <tr key={vehicle.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{vehicle.regNo}</td>
                                <td>{vehicle.model}</td>
                                <td>{vehicle.type}</td>
                                <td>{vehicle.cond}</td>
                                <td>{vehicle.rentalPrice}</td>
                                <td>{vehicle.availability}</td>
                                <td>
                                    <Link className="btn btn-primary mx-2" to={`/viewvehicle/${vehicle.id}`}>View</Link>
                                    <Link
                                        className="btn btn-outline-primary mx-2"
                                        to={`/editvehicle/${vehicle.id}`}
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className="btn btn-danger mx-2"
                                        onClick={() => deleteVehicle(vehicle.id)}
                                    >
                                        Delete
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
