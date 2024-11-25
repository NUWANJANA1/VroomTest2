package com.example.CRUD.Service;

import com.example.CRUD.Entity.Booking;
import com.example.CRUD.Repo.BookingRepo;
import com.example.CRUD.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService {

    @Autowired
    private BookingRepo bookingRepo;

    public Booking save(Booking booking) {
        booking.setStatus("PENDING");
        booking.setBookingDate(java.time.LocalDate.now());
        return bookingRepo.save(booking);
    }

    public List<Booking> findAll() {
        return bookingRepo.findAll();
    }

    public Booking getBookingById(String id) {
        return bookingRepo.findById(id).orElseThrow(() -> new UserNotFoundException("Booking not found with ID: " + id));
    }

    public Booking updateBookingStatus(String id, String status) {
        return bookingRepo.findById(id).map(booking -> {
            booking.setStatus(status.toUpperCase());
            return bookingRepo.save(booking);
        }).orElseThrow(() -> new UserNotFoundException("Booking not found with ID: " + id));
    }

    public void deleteBooking(String id) {
        if (!bookingRepo.existsById(id)) {
            throw new UserNotFoundException("Booking not found with ID: " + id);
        }
        bookingRepo.deleteById(id);
    }

}
