import axios from "axios";
import { useQuery } from "react-query";

export function useGetData(type: 'students' | 'teachers' | 'administrations' | 'class' | 'others') {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}${type}`;

  return useQuery({
    queryKey: ['data', type],
    queryFn: async () => {
      const response = await axios.get(url, {
        headers: { "ngrok-skip-browser-warning": "true" },
      });
      return response.data;
    },
  });
}