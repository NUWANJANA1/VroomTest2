package com.example.CRUD.Service;

import com.example.CRUD.Entity.Review;
import com.example.CRUD.Repo.ReviewRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepo reviewRepo;


    public Review submitReview(Review review) {
        return reviewRepo.save(review);
    }


    public List<Review> getAllReviews() {
        return reviewRepo.findAll();
    }


    public ResponseEntity<Review> updateReview(Long reviewId, Review updatedReview) {
        Optional<Review> existingReview = reviewRepo.findById(reviewId);
        return existingReview.map(review -> {
            review.setName(updatedReview.getName());
            review.setRating(updatedReview.getRating());
            review.setReview(updatedReview.getReview());
            reviewRepo.save(review);
            return ResponseEntity.ok(review);
        }).orElseGet(() -> ResponseEntity.badRequest().build());
    }

    public ResponseEntity<String> deleteReview(Long reviewId) {
        if (reviewRepo.existsById(reviewId)) {
            reviewRepo.deleteById(reviewId);
            return ResponseEntity.ok("Review deleted successfully!");
        } else {
            return ResponseEntity.badRequest().body("Review not found!");
        }
    }
}
