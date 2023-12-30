// src/App.js
import { useState } from "react";
import Review from "./Component/Review";
import StarRating from "./Component/StarRating";
import Button from "./Component/Button/Button";
import Labels from "./Component/Utils/Labels";

const App = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: "John Doe",
      content: "Great product!",
      rating: 5,
      replies: [],
    },
    // Add more reviews as needed
  ]);

  const [newReview, setNewReview] = useState({
    content: "",
    rating: 1,
  });

  const handleReply = (reviewId, replyContent) => {
    setReviews((prevReviews) => {
      return prevReviews.map((review) => {
        if (review.id === reviewId) {
          return {
            ...review,
            replies: [
              ...review.replies,
              { author: "User", content: replyContent },
            ],
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
      author: "User",
      replies: [],
    };

    setReviews([...reviews, reviewWithId]);
    setNewReview({
      content: "",
      rating: 1,
    });
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold mb-4">Product Reviews</h1>
      <div className="mb-4">
        <div className="mb-2">
          <Labels text="Review:"></Labels>

          <textarea
            id="reviewContent"
            className="w-full border rounded-md p-2"
            value={newReview.content}
            onChange={(e) =>
              setNewReview({ ...newReview, content: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-2">
        <Labels text="Rating:"></Labels>
          <StarRating
            rating={newReview.rating}
            interactive={true}
            onRate={(rating) => setNewReview({ ...newReview, rating })}
          />
        </div>
        <Button text="Add Review" clickFn={handleReviewSubmit}></Button>
      </div>

      {reviews.map((review) => (
        <Review key={review.id} {...review} onReply={handleReply} />
      ))}
    </div>
  );
};

export default App;
