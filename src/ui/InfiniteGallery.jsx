import { useInfinitePhotos } from "../features/photos/useInfinitePhotos";
import Spinner from "./Spinner";
import { Fragment, useEffect, useRef } from "react";

const styledGallery = `container mx-auto`;
const styledGrid = `mt-5 grid grid-cols-3 gap-7 transition-all`;
// const styledGrid = `columns-3 gap-7 [&>img:not(:first-child)]:mt-5 transition-all}`;
// const styledImg = `opacity-100 transition-all duration-200 hover:scale-[1.05]`;

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
          : photos.pages.map((photoPage, id) => (
              <Fragment key={id}>
                {photoPage.map((photo, id) => (
                  <img
                    src={photo.image}
                    alt={photo.name}
                    key={id}
                    className={`h-full object-cover transition-all duration-200 hover:scale-[1.05]`}
                  ></img>
                ))}
              </Fragment>
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
