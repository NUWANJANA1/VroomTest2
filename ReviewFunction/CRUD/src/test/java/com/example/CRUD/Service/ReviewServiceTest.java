package com.example.CRUD.Service;

import com.example.CRUD.Entity.Review;
import com.example.CRUD.Repo.ReviewRepo;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class ReviewServiceTest {

    @Mock
    private ReviewRepo reviewRepo;

    @InjectMocks
    private ReviewService reviewService;

    public ReviewServiceTest() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testSubmitReview() {
        Review review = new Review(null, "John Doe", 5, "Great service!");
        when(reviewRepo.save(review)).thenReturn(new Review(1L, "John Doe", 5, "Great service!"));

        Review savedReview = reviewService.submitReview(review);
        assertEquals(1L, savedReview.getReviewId());
        assertEquals("John Doe", savedReview.getName());
    }

    @Test
    public void testUpdateReview() {
        Review existingReview = new Review(1L, "John Doe", 4, "Good service");
        Review updatedReview = new Review(null, "John Doe", 5, "Great service!");

        when(reviewRepo.findById(1L)).thenReturn(Optional.of(existingReview));
        when(reviewRepo.save(existingReview)).thenReturn(updatedReview);

        ResponseEntity<Review> response = reviewService.updateReview(1L, updatedReview);
        assertEquals(200, response.getStatusCodeValue());
        assertEquals(5, response.getBody().getRating());
    }

    @Test
    public void testDeleteReview() {
        when(reviewRepo.existsById(1L)).thenReturn(true);

        ResponseEntity<String> response = reviewService.deleteReview(1L);
        assertEquals(200, response.getStatusCodeValue());
        verify(reviewRepo, times(1)).deleteById(1L);
    }
}
