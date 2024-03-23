import { useMutation, useQueryClient } from "react-query";
import { updateCurrentProfile } from "../../services/apiProfiles";

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  const { mutate: updateProfile, isLoading: isUpdatingProfile } = useMutation({
    mutationFn: updateCurrentProfile,
    onSuccess: (profile) => {
      queryClient.setQueryData(["profile"], profile);
    },
  });
  return { updateProfile, isUpdatingProfile };
}
