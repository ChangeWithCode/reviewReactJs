// src/App.js
import  { useState } from 'react';
import Review from './Component/Review';
import StarRating from './Component/StarRating';

const App = () => {
  const [reviews, setReviews] = useState([
    { id: 1, author: 'John Doe', content: 'Great product!', rating: 5, replies: [] },
    // Add more reviews as needed
  ]);

  const [newReview, setNewReview] = useState({
    content: '',
    rating: 1,
  });

  const handleReply = (reviewId, replyContent) => {
    setReviews((prevReviews) => {
      return prevReviews.map((review) => {
        if (review.id === reviewId) {
          return {
            ...review,
            replies: [...review.replies, { author: 'User', content: replyContent }],
          };
        }
        return review;
      });
    });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const updatedReview = {
      ...newReview,
      rating: parseInt(newReview.rating, 10),
    };

    const reviewWithId = {
      ...updatedReview,
      id: reviews.length + 1,
      author: 'User',
      replies: [],
    };

    setReviews([...reviews, reviewWithId]);
    setNewReview({
      content: '',
      rating: 1,
    });
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold mb-4">Product Reviews</h1>

      <form onSubmit={handleReviewSubmit} className="mb-4">
        <div className="mb-2">
          <label htmlFor="reviewContent" className="block text-gray-600">Review:</label>
          <textarea
            id="reviewContent"
            className="w-full border rounded-md p-2"
            value={newReview.content}
            onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="rating" className="block text-gray-600">Rating:</label>
          <StarRating
            rating={newReview.rating}
            interactive = {true}
            onRate={(rating) => setNewReview({ ...newReview, rating })}
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">Add Review</button>
      </form>

      {reviews.map((review) => (
        <Review key={review.id} {...review} onReply={handleReply} />
      ))}
    </div>
  );
};

export default App;
