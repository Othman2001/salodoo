import AddShipment from './pages/AddShipment';
import HomePage from './pages/HomePage';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NextUIProvider, } from '@nextui-org/react';
import Shipments from './pages/Shipments';
import * as Styles from "./styles";
import theme from './theme/portal.theme';


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
        <Styles.AppContainer>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add-shipment" 
              element={<AddShipment />} />
              <Route path='/shipments' element={<Shipments />} />
            </Routes>
          </BrowserRouter>
        </Styles.AppContainer>

        <ReactQueryDevtools />
      </NextUIProvider>
    </QueryClientProvider>

  );
}

export default App;
