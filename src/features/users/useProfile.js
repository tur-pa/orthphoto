import { useQuery } from "react-query";
import { getProfileData } from "../../services/apiAuth";

export function useProfile() {
  const { isLoading, data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfileData,
  });

  return { isLoading, profile };
}
