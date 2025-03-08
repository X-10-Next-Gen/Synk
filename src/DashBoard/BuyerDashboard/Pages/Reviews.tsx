import React, { useState } from 'react';

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<string[]>([]);
  const [newReview, setNewReview] = useState<string>('');

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewReview(e.target.value);
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.trim()) {
      setReviews([...reviews, newReview]);
      setNewReview(''); // Clear the input after submitting
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Reviews</h1>
      <p className="text-gray-300 mb-6">Here you can view or leave reviews for products.</p>

      {/* Reviews Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Reviews</h2>
        <div className="mt-4">
          {reviews.length === 0 ? (
            <p className="text-gray-400">No reviews yet. Be the first to leave one!</p>
          ) : (
            <ul>
              {reviews.map((review, index) => (
                <li key={index} className="text-white mb-2 p-2 bg-gray-700 rounded-md">
                  {review}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Review Form */}
      <form onSubmit={handleReviewSubmit} className="bg-gray-800 p-6 rounded-lg">
        <div className="mb-4">
          <label className="text-white block mb-1">Write a Review</label>
          <input
            type="text"
            value={newReview}
            onChange={handleReviewChange}
            className="w-full p-2 bg-gray-700 text-white rounded"
            placeholder="Share your thoughts..."
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Reviews;
