import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProfileStats } from "../../services/apiProfiles";

export function useProfileStats() {
  const { userName } = useParams();

  const { isLoading, data: profileStats } = useQuery({
    queryKey: ["profileStats"],
    queryFn: () => getProfileStats(userName),
    retry: false,
  });

  return { isLoading, profileStats };
}
