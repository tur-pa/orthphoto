import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPhoto } from "../../services/apiPhotos";

export function usePhoto() {
  const { photoId } = useParams();
  const {
    isLoading,
    data: photo,
    error,
  } = useQuery({
    queryKey: ["photo", photoId],
    queryFn: () => getPhoto(photoId),
    retry: false,
  });

  return { isLoading, error, photo };
}
