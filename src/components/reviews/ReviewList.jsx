import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ReviewList.css';

const ReviewList = ({ dishId, refreshTrigger }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedReview, setExpandedReview] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    try {
      const storedReviews = JSON.parse(localStorage.getItem(`reviews-${dishId}`)) || [];
      setReviews(storedReviews);
    } catch (err) {
      setError('Failed to load reviews');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [dishId, refreshTrigger]);

  const toggleReview = (reviewId) => {
    setExpandedReview(expandedReview === reviewId ? null : reviewId);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const renderRatingStars = (rating) => {
    return (
      <div className="rating-stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
            ★
          </span>
        ))}
      </div>
    );
  };

  if (isLoading) return <div className="loading">Loading reviews...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="review-list-container">
      <h2 className="review-list-header">Customer Reviews ({reviews.length})</h2>

      {reviews.length === 0 ? (
        <p className="no-reviews">Be the first to review this dish!</p>
      ) : (
        <ul className="review-list">
          {reviews.map((review) => (
            <li key={review.id} className="review-item">
              <div className="review-summary" onClick={() => toggleReview(review.id)}>
                <div className="review-meta">
                  <span className="review-author">{review.username}</span>
                  <span className="review-date">{formatDate(review.date)}</span>
                </div>
                {renderRatingStars(review.rating)}
                <p className="review-excerpt">
                  {expandedReview === review.id
                    ? review.comment
                    : `${review.comment.substring(0, 100)}${review.comment.length > 100 ? '...' : ''}`}
                </p>
                {review.comment.length > 10 && (
                  <button className="read-more-btn">
                    {expandedReview === review.id ? 'Show less' : 'Read more'}
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ReviewList.propTypes = {
  dishId: PropTypes.string.isRequired,
  refreshTrigger: PropTypes.any,
};

export default ReviewList;