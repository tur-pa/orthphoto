import { useQuery } from "react-query";
import { getCountRows } from "../../services/apiPhotos";

export function useCount() {
  const {
    isLoading,
    data: count,
    error,
  } = useQuery({
    queryKey: ["count"],
    queryFn: () => getCountRows(),
  });

  return { isLoading, error, count };
}
