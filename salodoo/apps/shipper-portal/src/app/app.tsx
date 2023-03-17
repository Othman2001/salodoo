import Header from './components/header/Header';
import AddShipment from './pages/AddShipment';
import HomePage from './pages/HomePage';
import Layout from "./shared/Layout";
import {Route, BrowserRouter , Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Test from './components/Test';
import { NavbarComponent } from '@sharedUi';
import { NextUIProvider, theme } from '@nextui-org/react';

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
        <NavbarComponent />      
        <BrowserRouter>
        <Routes>
          <Route  path="/" element={<HomePage />} />
          <Route path="/add-shipment" element={<AddShipment />} />
        </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
        </NextUIProvider>
      </QueryClientProvider>
        
  );
}

export default App;
