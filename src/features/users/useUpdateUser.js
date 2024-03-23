import { useMutation, useQueryClient } from "react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: updateUser, isLoading: isUpdatingUser } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["user"], user);
      navigate(`/user/${user.user_metadata.username}`);
    },
  });
  return { updateUser, isUpdatingUser };
}
