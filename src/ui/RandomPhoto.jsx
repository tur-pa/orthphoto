import { useEffect, useState } from "react";
import { usePhoto } from "../features/photos/usePhoto";
import { useDataContext } from "../context/DataContext";

function RandomPhoto() {
  const { count, isLoadingCount } = useDataContext();
  // TODO FIRST RENDER TO REAPIR
  const [randomNum, setRandomNum] = useState(3);
  const { photo, isLoading } = usePhoto(randomNum);

  useEffect(() => {
    const interval = setInterval(
      () => setRandomNum(Math.floor(Math.random() * count + 1)),
      10000,
    );
    return () => clearInterval(interval);
  }, [count]);

  if (isLoadingCount || isLoading) return null;

  return (
    <div className="relative">
      <img
        alt={photo?.author}
        src={photo?.image}
        className="rounded-2xl object-cover shadow transition-all duration-200 md:max-h-[75vh]"
      ></img>
      <p className="absolute bottom-1 right-4 text-sm text-gray-100">
        Autor zdjęcia {photo?.author}
      </p>
    </div>
  );
}

export default RandomPhoto;
