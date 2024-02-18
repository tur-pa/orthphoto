import { usePhotos } from "../features/photos/usePhotos";
import Spinner from "./Spinner";

const styledGallery = `container mx-auto`;
const styledGrid = ``;

function Gallery() {
  const { isLoading, photos } = usePhotos();

  return (
    <div className={styledGallery}>
      <div className={`mt-5 grid grid-cols-3 gap-7 transition-all`}>
        {photos === undefined
          ? null
          : photos.map((photo) => (
              <img
                src={photo.image}
                alt={photo.name}
                key={photo.name}
                className={`h-full object-cover transition-all duration-200 hover:scale-[1.05]`}
              ></img>
            ))}
      </div>
      {isLoading && <Spinner />}
    </div>
  );
}

export default Gallery;
