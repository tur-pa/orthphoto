import { useQuery, useQueryClient } from "react-query";
import { getPhotos } from "../../services/apiPhotos";
import { useSearchParams } from "react-router-dom";
import { GALLERY_SIZE } from "../../utils/constants";

export function usePhotos(filterBy) {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  // SORT
  const sortDir = searchParams.get("sortDir") || "desc";
  const sortField = searchParams.get("sortBy") || "created_at";
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));
  const sortBy = { sortDir, sortField };

  // QUERY
  const {
    data: { data: photos, count } = {},
    error,
    isLoading,
  } = useQuery({
    queryKey: ["photos", sortBy, filterBy, page],
    queryFn: () => getPhotos({ sortBy, filterBy, page }),
  });

  // PRE-FETCHING
  const pageCount = Math.ceil(count / GALLERY_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["photos", sortBy, filterBy, page - 1],
      queryFn: () => getPhotos({ sortBy, filterBy, page: page - 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["photos", sortBy, filterBy, page + 1],
      queryFn: () => getPhotos({ sortBy, filterBy, page: page + 1 }),
    });

  return { isLoading, photos, count, error };
}
