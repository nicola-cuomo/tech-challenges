import { useQuery } from "react-query";
import { SurveyList } from "../api/Survey";

export function useService(queryParam = "list") {
  const { isLoading, isError, data, error } = useQuery<SurveyList, Error>(
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
