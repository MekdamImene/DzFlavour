import React, { useState } from 'react';

const ReviewForm = ({ dishId, onAddReview }) => {
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  // Handle review submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      dishId,
      username,
      rating,
      comment,
    };

    // Send review to API or store in database
    const response = await fetch('http://localhost:3000/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview),
    });

    const data = await response.json();

    // Call onAddReview passed from the parent to update the reviews list
    onAddReview(data);
  };

  return (
    <div>
      <h3>Leave a Review</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Your Name</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value} / 5
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="comment">Your Comment</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;