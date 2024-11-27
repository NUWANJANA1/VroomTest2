package com.supplier.suppliermanagement.exception;

public class SupplierNotFoundException extends RuntimeException {
    public SupplierNotFoundException(Long id) {
        super("Supplier not found with ID: " + id);
    }
}
