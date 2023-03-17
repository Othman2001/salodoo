import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
  {path:"/" , element:<App/>}
])
root.render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>
);
