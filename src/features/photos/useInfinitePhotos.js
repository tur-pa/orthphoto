import { useInfiniteQuery } from "react-query";
import { getInfinitePhotos } from "../../services/apiPhotos";
import { useSearchParams } from "react-router-dom";

export function useInfinitePhotos() {
  const [searchParams] = useSearchParams();
  // SORT
  const sortDir = searchParams.get("sortDir") || "desc";
  const sortField = searchParams.get("sortBy") || "created_at";
  const sortBy = { sortDir, sortField };

  // QUERY

  const {
    data: photos,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["infinite-photos", sortBy],
    queryFn: ({ pageParam }) => getInfinitePhotos({ sortBy, pageParam }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length === 0 ? undefined : pages.length + 1;
    },
  });

  return { isFetching, photos, error, fetchNextPage, hasNextPage };
}
