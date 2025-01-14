import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1>404</h1>,

  },
  {
    path: "/flat",
    element:<h1>FLAT</h1>
  },  

  {
    path: "/about",
    element:<h1>À PROPOS</h1>
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />  {/* Fournit le routeur pour gérer les routes */}
  </StrictMode>,
);
