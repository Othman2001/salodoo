import { Route, BrowserRouter, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextUIProvider, } from '@nextui-org/react';
import theme from "./theme/biker.theme";
import HomePage from "./pages/HomePage";
import Shipments from "./pages/Shipments";
import ShipmentsCarsContainer from "./components/shipments/ShipmentsCardContainer";

export function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });
  return (
    <QueryClientProvider client={client}>
      <NextUIProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-shipments" element={<Shipments />} />
            <Route path="/browser-shipments" element={<ShipmentsCarsContainer />} />

          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </NextUIProvider>
    </QueryClientProvider>

  );
}

export default App;
