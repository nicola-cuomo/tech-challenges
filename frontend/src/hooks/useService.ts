import { useQuery } from "react-query";

export function useService<P>(queryParam = "list") {
  const { isLoading, isError, data, error } = useQuery<P, Error>(
    queryParam,
    async () => {
      const response = await fetch(`/api/${queryParam}.json`);
      if (!response.ok) {
        throw new Error("Error getting data");
      }
      return response.json();
    }
  );
  return { isLoading, isError, data, error };
}
