import { useInfiniteQuery } from "react-query";
import { getPhotos } from "../../services/apiPhotos";

export function usePhotos() {
  const {
    data: photos,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["photos"],
    queryFn: getPhotos,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length === 0 ? undefined : pages.length + 1;
    },
  });

  return { isFetching, photos, error, fetchNextPage, hasNextPage };
}
