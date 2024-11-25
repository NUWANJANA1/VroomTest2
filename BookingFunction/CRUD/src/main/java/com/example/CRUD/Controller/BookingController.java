package com.example.CRUD.Controller;

import com.example.CRUD.Entity.Booking;
import com.example.CRUD.Service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/bookings")
public class BookingController {
    @Autowired
    private BookingService bookingService;
    
    @PostMapping("/create")
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingService.save(booking);
    }

    @GetMapping("/getAll")
    public List<Booking> getAllBookings() {
        return bookingService.findAll();
    }

    @GetMapping("/search/{id}")
    public Booking getBookingById(@PathVariable String id) {
        return bookingService.getBookingById(id);
    }

    @PutMapping("/updateStatus/{id}")
    public Booking updateBookingStatus(@PathVariable String id, @RequestParam String status) {
        return bookingService.updateBookingStatus(id, status);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteBooking(@PathVariable String id) {
        bookingService.deleteBooking(id);
        return "Booking with ID " + id + " has been deleted successfully.";
    }
}
