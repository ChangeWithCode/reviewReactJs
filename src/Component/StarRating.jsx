// src/components/StarRating.js
import { useState } from "react";
import PropTypes from "prop-types";

const StarRating = ({ rating, onRate, interactive }) => {
  const [hoveredRating, setHoveredRating] = useState(null);

  const getColor = (star) => {
    if (hoveredRating !== null) {
      return star <= hoveredRating ? "text-blue-500" : "text-gray-300";
    }
    return star <= rating ? getColorForRating(rating) : "text-gray-300";
  };

  const getColorForRating = (rating) => {
    const colorScale = {
      5: "text-green-500",
      4: "text-green-500",
      3: "text-yellow-500",
      2: "text-orange-500",
      1: "text-red-500",
    };
    return colorScale[rating] || "text-gray-300";
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`cursor-pointer text-2xl transition-colors ${getColor(
            star
          )}`}
          onMouseEnter={interactive ? (() => setHoveredRating(star)) : null}
          onMouseLeave={interactive ? (() => setHoveredRating(null)) : null}
          onClick={interactive ? (() => onRate(star)) : null}
        >
          ★
        </span>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onRate: PropTypes.func,
  interactive: PropTypes.bool,
};

export default StarRating;
