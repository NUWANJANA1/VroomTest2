package com.vehiclerental.vehiclemanage_backend.controller;

import com.vehiclerental.vehiclemanage_backend.exception.VehicleNotFoundException;
import com.vehiclerental.vehiclemanage_backend.model.Vehicle;
import com.vehiclerental.vehiclemanage_backend.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class VehicleController {

    @Autowired
    private VehicleRepository vehicleRepository;


    @PostMapping("/vehicle")
    public Vehicle newVehicle(@RequestBody Vehicle newVehicle) {
        return  vehicleRepository.save(newVehicle);
    }





    @GetMapping("/vehicles")
    public List<Vehicle> getAllVehicles() {
        return vehicleRepository.findAll();
    }


    @GetMapping("/vehicle/{id}")
    public Vehicle getVehicleById(@PathVariable Long id) {
        return vehicleRepository.findById(id)
                .orElseThrow(() -> new VehicleNotFoundException(id));
    }


    @PutMapping("/vehicle/{id}")
    public Vehicle updateVehicle(@RequestBody Vehicle newVehicle, @PathVariable Long id) {
        return vehicleRepository.findById(id)
                .map(vehicle -> {
                    vehicle.setRegNo(newVehicle.getRegNo());
                    vehicle.setModel(newVehicle.getModel());
                    vehicle.setType(newVehicle.getType());
                    vehicle.setCond(newVehicle.getCond());
                    vehicle.setRentalPrice(newVehicle.getRentalPrice());
                    vehicle.setAvailability(newVehicle.getAvailability());
                    return vehicleRepository.save(vehicle);
                }).orElseThrow(() -> new VehicleNotFoundException(id));
    }


    @DeleteMapping("/vehicle/{id}")
    public String deleteVehicle(@PathVariable Long id) {
        if (!vehicleRepository.existsById(id)) {
            throw new VehicleNotFoundException(id);
        }
        vehicleRepository.deleteById(id);
        return "Vehicle with ID  "+id +" has been deleted successfully.";
    }
}
