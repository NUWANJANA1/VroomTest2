package com.supplier.suppliermanagement.controller;

import com.supplier.suppliermanagement.exception.ResourceNotFoundException;
import com.supplier.suppliermanagement.model.Supplier;
import com.supplier.suppliermanagement.model.Vehicle;
import com.supplier.suppliermanagement.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/suppliers")
@CrossOrigin(origins = "*")
public class SupplierController {

    @Autowired
    private SupplierRepository supplierRepository;

    // Add a new supplier
    @PostMapping
    public Supplier addSupplier(@RequestBody Supplier supplier) {
        return supplierRepository.save(supplier);
    }

    // Get all suppliers
    @GetMapping
    public List<Supplier> getAllSuppliers() {
        return supplierRepository.findAll();
    }

    // Get a supplier by ID
    @GetMapping("/{id}")
    public Supplier getSupplierById(@PathVariable Long id) {
        return supplierRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Supplier not found with ID: " + id));
    }

    // Update a supplier
    @PutMapping("/{id}")
    public Supplier updateSupplier(@PathVariable Long id, @RequestBody Supplier updatedSupplier) {
        return supplierRepository.findById(id)
                .map(supplier -> {
                    supplier.setFullName(updatedSupplier.getFullName());
                    supplier.setMobileNo(updatedSupplier.getMobileNo());
                    supplier.setNicDetails(updatedSupplier.getNicDetails());
                    supplier.setDescription(updatedSupplier.getDescription());
                    return supplierRepository.save(supplier);
                })
                .orElseThrow(() -> new ResourceNotFoundException("Supplier not found with ID: " + id));
    }

    // Delete a supplier
    @DeleteMapping("/{id}")
    public String deleteSupplier(@PathVariable Long id) {
        if (!supplierRepository.existsById(id)) {
            throw new ResourceNotFoundException("Supplier not found with ID: " + id);
        }
        supplierRepository.deleteById(id);
        return "Supplier with ID " + id + " has been deleted successfully.";
    }

    // Get all vehicles for a specific supplier
    @GetMapping("/{id}/vehicles")
    public List<Vehicle> getVehiclesBySupplierId(@PathVariable Long id) {
        Supplier supplier = supplierRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Supplier not found with ID: " + id));
        return supplier.getVehicles();
    }
}
