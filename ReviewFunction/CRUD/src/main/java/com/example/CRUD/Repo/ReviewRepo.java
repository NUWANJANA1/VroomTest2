package com.example.CRUD.Repo;

import com.example.CRUD.Entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepo extends JpaRepository<Review, Long> {
    // JpaRepository already provides CRUD operations, so no custom methods are needed for basic functionality
}
