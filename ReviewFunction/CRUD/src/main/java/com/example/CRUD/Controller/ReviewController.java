package com.example.CRUD.Controller;

import com.example.CRUD.Entity.Review;
import com.example.CRUD.Service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;


    @PostMapping("/submit")
    public ResponseEntity<Review> submitReview(@RequestBody Review review) {
        Review savedReview = reviewService.submitReview(review);
        return ResponseEntity.ok(savedReview);
    }

    @GetMapping
    public List<Review> getAllReviews() {
        return reviewService.getAllReviews();
    }


    @PutMapping("/update/{reviewId}")
    public ResponseEntity<Review> updateReview(@PathVariable Long reviewId, @RequestBody Review updatedReview) {
        return reviewService.updateReview(reviewId, updatedReview);
    }

    @DeleteMapping("/delete/{reviewId}")
    public ResponseEntity<String> deleteReview(@PathVariable Long reviewId) {
        return reviewService.deleteReview(reviewId);
    }
}
