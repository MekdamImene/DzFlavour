import React, { useEffect, useState } from 'react';
import './ReviewList.css';

const ReviewList = ({ dishId, newReview }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem(`reviews-${dishId}`)) || [];
    setReviews(storedReviews);
  }, [dishId]);

  useEffect(() => {
    if (newReview) {
      setReviews((prev) => {
        const updated = [...prev, newReview];
        localStorage.setItem(`reviews-${dishId}`, JSON.stringify(updated));
        return updated;
      });
    }
  }, [newReview, dishId]);

  return (
    <div className="review-list">
      <h3>Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to write one!</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <strong>{review.username}</strong>
              <span className="review-date">
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>
            <div className="review-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={`star ${star <= review.rating ? 'selected' : ''}`}>
                  ★
                </span>
              ))}
            </div>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewList;
