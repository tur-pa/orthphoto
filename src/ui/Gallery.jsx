import { useDataContext } from "../context/DataContext";
import { usePhotos } from "../features/photos/usePhotos";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

const styledGallery = `container mx-auto`;

function Gallery({ filter }) {
  const { isLoading, photos, count } = usePhotos(filter);
  const { searchData, isSearching } = useDataContext();

  const dataToMap = isSearching ? searchData : photos;

  return (
    <>
      <div className={styledGallery}>
        <div className={`mt-5 grid grid-cols-3 gap-7 transition-all`}>
          {dataToMap?.map((photo) => (
            <img
              src={photo.image}
              alt={photo.name}
              key={photo.name}
              className={`h-full object-cover transition-all duration-200 hover:scale-[1.05]`}
            ></img>
          ))}
        </div>
        {isLoading && <Spinner />}
        <div className="flex justify-center">
          <Pagination count={count}></Pagination>
        </div>
      </div>
    </>
  );
}

export default Gallery;
