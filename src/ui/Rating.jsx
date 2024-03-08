import { useState } from "react";
import RatingStar from "./RatingStar";

function Rating({ defaultRating }) {
  const [rating, setRating] = useState(Math.round(defaultRating * 2) / 2);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(newRating) {
    setRating((curr) => Math.round(curr + newRating) / 2);
  }
  console.log(rating);

  return (
    <div>
      <p className="py-1 text-gray-500">Ocena</p>
      <div className="flex">
        {Array.from({ length: 5 }, (_, i) => {
          return (
            <RatingStar
              full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
              onRate={() => handleRating(i + 1)}
              onHoverIn={() => setTempRating(i + 1)}
              onHoverOut={() => setTempRating(0)}
            ></RatingStar>
          );
        })}
      </div>
    </div>
  );
}

export default Rating;
