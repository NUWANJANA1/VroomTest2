package com.vehiclerental.vehiclemanage_backend.repository;

import com.vehiclerental.vehiclemanage_backend.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle,Long> {
}

