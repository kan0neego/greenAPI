import { useQuery } from "react-query";
import { API } from "@/components/shared/api";

export default function useUserQuery(id: number, token: string) {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => API.getStateInstance(id, token).then((res) => res),
  });
}
