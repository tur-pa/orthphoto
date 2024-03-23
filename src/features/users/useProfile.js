import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCurrentProfile } from "../../services/apiProfiles";

export function useProfile() {
  const { userName } = useParams();

  const { isLoading, data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getCurrentProfile(userName),
    retry: false,
  });

  return { isLoading, profile };
}
