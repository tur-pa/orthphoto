import { useQuery } from "react-query";
import { getPhotos } from "../../services/apiPhotos";
import { useSearchParams } from "react-router-dom";

export function usePhotos() {
  const [searchParams] = useSearchParams();

  // SORT
  const sortDir = searchParams.get("sortDir") || "desc";
  const sortField = searchParams.get("sortBy") || "created_at";
  const sortBy = { sortDir, sortField };

  // QUERY
  const {
    data: photos,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["photos", sortBy],
    queryFn: () => getPhotos({ sortBy }),
  });

  return { isLoading, photos, error };
}
