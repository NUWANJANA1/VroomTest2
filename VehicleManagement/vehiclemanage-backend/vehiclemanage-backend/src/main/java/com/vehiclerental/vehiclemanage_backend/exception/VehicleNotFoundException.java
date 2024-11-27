package com.vehiclerental.vehiclemanage_backend.exception;

public class VehicleNotFoundException extends RuntimeException {
    public VehicleNotFoundException(Long id) {
        super("Could not find the vehicle with id " + id);
    }
}
