// src/components/Review.js
import PropTypes from 'prop-types';
import StarRating from './StarRating';

const Review = ({author, content, rating, replies }) => {

  return (
    <div className="bg-white p-4 shadow-md mb-4">
      <h3 className="text-xl font-semibold mb-2">{author}</h3>
      <p className="text-gray-700 mb-2">{content}</p>
      <div className="flex items-center mb-2">
      <StarRating rating={rating} interactive={false} />
      </div>

      {replies && replies.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Replies:</h4>
          {replies.map((reply, index) => (
            <div key={index} className="text-gray-600">
              <span className="font-semibold">{reply.author}:</span> {reply.content}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Review.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  replies: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })),
};

export default Review;
