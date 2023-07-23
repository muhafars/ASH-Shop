import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
const Rating = ({ value, text }) => {
  const maxRating = 5; // Maximum rating value

  return (
    <div className="rating">
      {[...Array(maxRating)].map((unused, index) => (
        <span key={index}>
          {value >= index + 1 ? (
            value - index >= 0.5 ? (
              <FaStar />
            ) : (
              <FaStarHalfAlt />
            )
          ) : (
            <FaRegStar />
          )}
        </span>
      ))}
      <span className="rating-text">{text && text}</span>
    </div>
  );
};

export default Rating;
