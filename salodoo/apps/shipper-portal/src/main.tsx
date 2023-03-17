import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './app/app';
import AddShipment from './app/pages/AddShipment';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
  {path:"/" , element:<App/>},
  {path:"/add-shipment", element:<AddShipment/>}
])
root.render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>
);
