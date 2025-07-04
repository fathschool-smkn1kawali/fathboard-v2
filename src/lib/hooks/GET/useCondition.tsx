import axios from "axios";
import { useQuery } from "react-query";

function useGetCondition() {
  const { data, isLoading, error } = useQuery(
    "getCondition",
    async () => {
      try {
        const response = await axios.get("https://fathschool.smkn1kawali.sch.id/api/iot");
        return response.data;
      } catch (err) {
        console.error("Error fetching condition:", err); // Gunakan err agar tidak unused
        throw new Error("Gagal mengambil data kondisi!");
      }
    },
    {
      retry: 2,
      staleTime: 1000 * 60 * 5,
    }
  );

  return {
    Condition: data?.data || [],
    ConditionLoad: isLoading,
    ConditionError: error,
  };
}

export { useGetCondition };
