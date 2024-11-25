package com.example.CRUD.Controller;

import com.example.CRUD.Entity.Review;
import com.example.CRUD.Repo.ReviewRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/reviews")  // Base path for the review endpoints
public class ReviewController {

    @Autowired
    private ReviewRepo reviewRepo;

    // Submit a new review
    @PostMapping("/submit")
    public ResponseEntity<Review> submitReview(@RequestBody Review review) {
        Review savedReview = reviewRepo.save(review);
        return ResponseEntity.ok(savedReview);
    }

    // Get all reviews
    @GetMapping
    public List<Review> getAllReviews() {
        return reviewRepo.findAll();
    }

    // Update a review
    @PutMapping("/update/{reviewId}")
    public ResponseEntity<Review> updateReview(@PathVariable Long reviewId, @RequestBody Review updatedReview) {
        Optional<Review> existingReview = reviewRepo.findById(reviewId);
        return existingReview.map(review -> {
            review.setName(updatedReview.getName());
            review.setRating(updatedReview.getRating());
            review.setReview(updatedReview.getReview());
            reviewRepo.save(review);
            return ResponseEntity.ok(review);
        }).orElseGet(() -> ResponseEntity.badRequest().build());
    }

    // Delete a review
    @DeleteMapping("/delete/{reviewId}")
    public ResponseEntity<String> deleteReview(@PathVariable Long reviewId) {
        if (reviewRepo.existsById(reviewId)) {
            reviewRepo.deleteById(reviewId);
            return ResponseEntity.ok("Review deleted successfully!");
        } else {
            return ResponseEntity.badRequest().body("Review not found!");
        }
    }
}
