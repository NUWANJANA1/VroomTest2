package com.supplier.suppliermanagement.controller;

import com.supplier.suppliermanagement.exception.ResourceNotFoundException;
import com.supplier.suppliermanagement.model.Vehicle;
import com.supplier.suppliermanagement.model.Supplier;
import com.supplier.suppliermanagement.repository.VehicleRepository;
import com.supplier.suppliermanagement.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vehicles")
@CrossOrigin(origins = "*")
public class VehicleController {

    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private SupplierRepository supplierRepository;

    // Add a new vehicle for a supplier
    @PostMapping("/supplier/{supplierId}")
    public Vehicle addVehicle(@PathVariable Long supplierId, @RequestBody Vehicle vehicle) {
        Supplier supplier = supplierRepository.findById(supplierId)
                .orElseThrow(() -> new ResourceNotFoundException("Supplier not found with ID: " + supplierId));

        vehicle.setSupplier(supplier); // Set the supplier for the vehicle
        return vehicleRepository.save(vehicle);
    }

    // Get all vehicles
    @GetMapping
    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    // Get a vehicle by ID
    @GetMapping("/{id}")
    public Vehicle getVehicleById(@PathVariable Long id) {
        return vehicleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Vehicle not found with ID: " + id));
    }

    // Update a vehicle
    @PutMapping("/{id}")
    public Vehicle updateVehicle(@PathVariable Long id, @RequestBody Vehicle updatedVehicle) {
        return vehicleRepository.findById(id)
                .map(vehicle -> {
                    vehicle.setRegNo(updatedVehicle.getRegNo());
                    vehicle.setModel(updatedVehicle.getModel());
                    vehicle.setType(updatedVehicle.getType());
                    vehicle.setCond(updatedVehicle.getCond());
                    vehicle.setRentalPriceRange(updatedVehicle.getRentalPriceRange());
                    vehicle.setTimeDuration(updatedVehicle.getTimeDuration());
                    vehicle.setDescription(updatedVehicle.getDescription());
                    return vehicleRepository.save(vehicle);
                })
                .orElseThrow(() -> new ResourceNotFoundException("Vehicle not found with ID: " + id));
    }

    // Delete a vehicle
    @DeleteMapping("/{id}")
    public String deleteVehicle(@PathVariable Long id) {
        if (!vehicleRepository.existsById(id)) {
            throw new ResourceNotFoundException("Vehicle not found with ID: " + id);
        }
        vehicleRepository.deleteById(id);
        return "Vehicle with ID " + id + " has been deleted successfully.";
    }
}
