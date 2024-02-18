import { useInfinitePhotos } from "../features/photos/useInfinitePhotos";
import Spinner from "./Spinner";
import { useEffect, useRef } from "react";

const styledGallery = `container mx-auto`;
const styledGrid = `columns-3 gap-7 [&>img:not(:first-child)]:mt-5 transition-all}`;

function InfiniteGallery() {
  const { isFetching, photos, fetchNextPage, hasNextPage } =
    useInfinitePhotos();

  const observerTarget = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      {
        threshold: 1,
      },
    );

    const target = observerTarget.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [observerTarget, fetchNextPage]);

  return (
    <div className={styledGallery}>
      <div className={styledGrid}>
        {photos === undefined
          ? null
          : photos.pages.map((photoPage) => (
              <>
                {photoPage.map((photo) => (
                  <img
                    src={photo.image}
                    alt={photo.name}
                    key={photo.name}
                    className={`opacity-100 transition-all duration-200 hover:scale-[1.05]`}
                  ></img>
                ))}
              </>
            ))}
      </div>
      {isFetching && <Spinner />}
      {!hasNextPage && (
        <h1 className="mt-8 flex w-full justify-center text-xl font-medium text-gray-600">
          Dotarłeś do końca. Wszystko, co mieliśmy już Ci pokazaliśmy.
        </h1>
      )}
      <div ref={observerTarget}></div>
    </div>
  );
}

export default InfiniteGallery;
