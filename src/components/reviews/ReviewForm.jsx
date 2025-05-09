import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ dishId, onAddReview }) => {
  const [formData, setFormData] = useState({
    username: '',
    rating: 0,
    comment: ''
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.username.trim()) throw new Error('Please enter your name');
    if (formData.rating === 0) throw new Error('Please select a rating');
    if (!formData.comment.trim()) throw new Error('Please write your review');
    if (formData.comment.trim().length < 10) throw new Error('Review should be at least 10 characters');
  };

  const handlePreview = (e) => {
    e.preventDefault();
    setError('');
    try {
      validateForm();
      setShowConfirmation(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError('');

    try {
      const newReview = {
        id: Date.now(),
        username: formData.username.trim(),
        rating: formData.rating,
        comment: formData.comment.trim(),
        date: new Date().toISOString()
      };

      const storedReviews = JSON.parse(localStorage.getItem(`reviews-${dishId}`)) || [];
      const updatedReviews = [...storedReviews, newReview];
      localStorage.setItem(`reviews-${dishId}`, JSON.stringify(updatedReviews));

      if (onAddReview) {
        onAddReview(newReview);
      }

      setFormData({ username: '', rating: 0, comment: '' });
      setHoverRating(0);
      setSuccess('Thank you for your review!');
      setShowConfirmation(false);

      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.message || 'Failed to submit review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="review-form">
      <h3>Leave a Review</h3>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      {!showConfirmation ? (
        <form onSubmit={handlePreview}>
          <div className="form-group">
            <label htmlFor="username">Your Name</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Your Rating</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  className={`star ${star <= (hoverRating || formData.rating) ? 'selected' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  aria-label={`Rate ${star} star${star !== 1 ? 's' : ''}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="comment">Your Review</label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Share your thoughts about this dish..."
              required
              minLength="10"
              rows="4"
            />
          </div>

          <button type="submit" className="btn preview-btn">
            Preview Review
          </button>
        </form>
      ) : (
        <div className="review-confirmation">
          <h4>Please confirm your review</h4>
          <div className="review-preview">
            <p><strong>Name:</strong> {formData.username}</p>
            <p><strong>Rating:</strong>
              <span className="star-rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className={`star ${star <= formData.rating ? 'selected' : ''}`}>
                    ★
                  </span>
                ))}
              </span>
            </p>
            <p><strong>Review:</strong> {formData.comment}</p>
          </div>
          <div className="confirmation-buttons">
            <button type="button" onClick={handleEdit} className="btn edit-btn">Edit</button>
            <button
              type="button"
              onClick={handleSubmit}
              className="btn submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span> Submitting...
                </>
              ) : (
                'Submit Review'
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
