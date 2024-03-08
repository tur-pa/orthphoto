import { FaRegStar, FaStar, FaStarHalfStroke } from "react-icons/fa6";

function RatingStar({ onRate, full, onHoverIn, onHoverOut }) {
  return (
    <span
      role="button"
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <FaStar color="rgb(234 179 8)" />
      ) : (
        <FaRegStar color="rgb(234 179 8)" />
      )}
    </span>
  );
}

export default RatingStar;
