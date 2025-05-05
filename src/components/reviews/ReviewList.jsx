import React, { useState, useEffect } from 'react';

// Component to display reviews for a dish
const ReviewList = ({ dishId }) => {
  const [reviews, setReviews] = useState([]);

  // Fetch reviews from API or data source on component mount
  useEffect(() => {
    const fetchReviews = async () => {
      // Replace with actual API or data source
      const response = await fetch(`http://localhost:3000/api/reviews/${dishId}`);
      const data = await response.json();
      setReviews(data);
    };

    fetchReviews();
  }, [dishId]); // Re-fetch reviews if dishId changes

  return (
    <div>
      <h3>Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>{review.username}</strong>
              <p>{review.comment}</p>
              <p>Rating: {review.rating} / 5</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;