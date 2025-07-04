'use client'

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "react-query";

export const Providers: React.FC<{ children: React.ReactNode }> = ({children}) => {
  
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,  // Mengambil data ulang ketika jendela fokus
        refetchInterval: 5000,       // Polling setiap 5 detik
        refetchOnMount: true,        // Mengambil data setiap kali komponen mount
        // staleTime: 0,                // Data dianggap sudah usang setelah 0 detik
      },
    },
  });
  

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>{children}</NextUIProvider>
    </QueryClientProvider>
  );
};
