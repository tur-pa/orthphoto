import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPhoto } from "../../services/apiPhotos";

export function usePhoto(randomId) {
  const { urlId } = useParams();
  const photoId = !randomId ? urlId : randomId;

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
