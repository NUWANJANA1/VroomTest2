package com.example.CRUD.Repo;

import com.example.CRUD.Entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepo extends JpaRepository <Booking, String>{
}
