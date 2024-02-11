import { useQuery } from "react-query";
import { getPhotos } from "../../services/apiPhotos";

export function usePhotos() {
  const {
    isLoading,
    data: photos,
    error,
  } = useQuery({ queryKey: ["photos"], queryFn: getPhotos });
  return { isLoading, photos, error };
}
