import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider, Outlet} from 'react-router-dom';
import './index.css'

import App from './App.jsx'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const PageStructure = () => {
  return (
  <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
};

const router = createBrowserRouter([

  {
    element: <PageStructure/>,
    children: [
      {
      path: "/",
      element: <App />
      },
      {
        path: "/flat",
        element:<h1>FLAT</h1>
      },  
      {
        path: "/about",
        element:
        <h1>À PROPOS</h1>
      },    
    ],
    errorElement: <h1>404</h1>,
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />  {/* Fournit le routeur pour gérer les routes */}
  </StrictMode>,
);
