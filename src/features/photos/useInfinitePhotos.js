import { useInfiniteQuery } from "react-query";
import { getInfinitePhotos } from "../../services/apiPhotos";

export function useInfinitePhotos() {
  const {
    data: photos,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["infinite-photos"],
    queryFn: getInfinitePhotos,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length === 0 ? undefined : pages.length + 1;
    },
  });

  return { isFetching, photos, error, fetchNextPage, hasNextPage };
}
