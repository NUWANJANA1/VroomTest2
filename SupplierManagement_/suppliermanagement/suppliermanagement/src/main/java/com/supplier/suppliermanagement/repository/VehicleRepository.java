package com.supplier.suppliermanagement.repository;

import com.supplier.suppliermanagement.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
}
