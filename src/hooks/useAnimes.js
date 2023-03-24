import useSWR from "swr";
import { animeUrl } from "@/config/constants";
import { fetcher, setOptions } from "@/helpers";

const useAnimes = (query, variables) => {
  const { data, error, isLoading } = useSWR(["getAnimes", variables], () =>
    fetcher(animeUrl, setOptions("POST", JSON.stringify({ query, variables })))
  );
  return {
    data: data?.data?.Page,
    loading: isLoading,
    error,
  };
};
export default useAnimes;
