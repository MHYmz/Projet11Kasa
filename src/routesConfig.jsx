import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider, Outlet} from 'react-router-dom';
import './index.css'

import HousingPage from './HousingPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Main from './components/Main/Main.jsx';

const PageStructure = () => {
  return (
  <>
    <Navbar/>
    <Main>
    <Outlet/>
    </Main>
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
      element: <HousingPage />
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
