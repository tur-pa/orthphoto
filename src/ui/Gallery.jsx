import { usePhotos } from "../features/photos/usePhotos";
import Spinner from "./Spinner";

const styledGallery = `container mx-auto`;
const styledGrid = `columns-3 gap-5 [&>img:not(:first-child)]:mt-5`;

function Gallery() {
  const { isLoading, photos } = usePhotos();

  return (
    <div className={styledGallery}>
      <div className={styledGrid}>
        {isLoading ? (
          <Spinner></Spinner>
        ) : (
          photos.map((photo) => (
            <img src={photo.image} alt={photo.name} key={photo.name}></img>
          ))
        )}
      </div>
    </div>
  );
}

export default Gallery;
