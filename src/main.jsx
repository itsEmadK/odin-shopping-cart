import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './routes/App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routes = [{ path: '/', element: <App /> }];

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
