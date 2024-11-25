import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReviewComponent.css';

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 0,
    review: '',
  });
  const [editReview, setEditReview] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/reviews')  
      .then((response) => setReviews(response.data))
      .catch((error) => console.error('Error fetching reviews:', error));
  }, []);

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editReview) {
    
      axios.put(`http://localhost:8080/api/reviews/update/${editReview.reviewId}`, newReview)
        .then((response) => {
          const updatedReviews = reviews.map((review) =>
            review.reviewId === editReview.reviewId ? response.data : review
          );
          setReviews(updatedReviews);
          setNewReview({ name: '', rating: 0, review: '' });
          setEditReview(null);
        })
        .catch((error) => console.error('Error updating review:', error));
    } else {
    
      axios.post('http://localhost:8080/api/reviews/submit', newReview)
        .then((response) => {
          setReviews([...reviews, response.data]);
          setNewReview({ name: '', rating: 0, review: '' });
        })
        .catch((error) => console.error('Error submitting review:', error));
    }
  };

  const handleEdit = (review) => {
    setEditReview(review);
    setNewReview({
      name: review.name,
      rating: review.rating,
      review: review.review,
    });
  };

 
  const handleDelete = (reviewId) => {
    axios.delete(`http://localhost:8080/api/reviews/delete/${reviewId}`)
      .then(() => {
        setReviews(reviews.filter((review) => review.reviewId !== reviewId));
      })
      .catch((error) => console.error('Error deleting review:', error));
  };

  return (
    <div>
      <h2>Reviews</h2>

 
      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newReview.name}
          onChange={handleInputChange}
          placeholder="Your Name"
          required
        />
        <input
          type="number"
          name="rating"
          value={newReview.rating}
          onChange={handleInputChange}
          placeholder="Rating (1-5)"
          min="1"
          max="5"
          required
        />
        <textarea
          name="review"
          value={newReview.review}
          onChange={handleInputChange}
          placeholder="Write your review..."
          required
        />
        <button type="submit">{editReview ? 'Update Review' : 'Submit Review'}</button>
      </form>

      
      <div>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.reviewId} className="review-item">
              <h4>{review.name} (Rating: {review.rating})</h4>
              <p>{review.review}</p>
              <button onClick={() => handleEdit(review)}>Edit</button>
              <button onClick={() => handleDelete(review.reviewId)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewComponent;
