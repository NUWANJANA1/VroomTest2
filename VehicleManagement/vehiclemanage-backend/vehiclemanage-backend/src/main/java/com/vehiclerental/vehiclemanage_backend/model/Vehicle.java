package com.vehiclerental.vehiclemanage_backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Vehicle {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false, unique = true)
    private String regNo;

    private String model;
    private String type;
    private String cond;
    private Double rentalPrice;

    @Column(nullable = false)
    private String availability = "Available";

    // Default Constructor
    public Vehicle() {
    }

    // Parameterized Constructor
    public Vehicle(String regNo, String model, String type, String cond, double rentalPrice, String availability) {
        this.regNo = regNo;
        this.model = model;
        this.type = type;
        this.cond = cond;
        this.rentalPrice = rentalPrice;
        this.availability = availability;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRegNo() {
        return regNo;
    }

    public void setRegNo(String regNo) {
        this.regNo = regNo;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getCond() {
        return cond;
    }

    public void setCond(String cond) {
        this.cond = cond;
    }

    public Double getRentalPrice() {
        return rentalPrice;
    }

    public void setRentalPrice(Double rentalPrice) {
        this.rentalPrice = rentalPrice;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }
}
