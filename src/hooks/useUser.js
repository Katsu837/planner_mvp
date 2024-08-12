import useSWR from "swr";
import { fetcher } from "@/api/fetcher";

export const useUser = () => {
  const { data, isLoading, error } = useSWR(USER_DOMAIN, fetcher);

  return {
    data: data,
    isLoading: isLoading,
    error: error,
  };
};
