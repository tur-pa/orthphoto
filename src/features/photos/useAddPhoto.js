import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";

import { addPhotoApi } from "../../services/apiPhotos";

export function useAddPhoto() {
  const queryClient = useQueryClient();
  const { mutate: addPhoto, isLoading: isAdding } = useMutation({
    mutationFn: addPhotoApi,
    onSuccess: () => {
      toast.success("New photo added.");
      queryClient.invalidateQueries({ queryKey: ["photos"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAdding, addPhoto };
}
