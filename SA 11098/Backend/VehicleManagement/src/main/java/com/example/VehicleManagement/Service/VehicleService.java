package com.example.VehicleManagement.Service;

import com.example.VehicleManagement.model.Vehicle;
import com.example.VehicleManagement.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    // Get all vehicles
    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    // Get vehicle by ID
    public Optional<Vehicle> getVehicleById(Long id) {
        return vehicleRepository.findById(id);
    }

    // Add or update a vehicle
    public Vehicle saveOrUpdateVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    // Delete a vehicle by ID
    public void deleteVehicle(Long id) {
        vehicleRepository.deleteById(id);
    }
}
