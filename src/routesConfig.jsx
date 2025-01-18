import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider, Outlet} from 'react-router-dom';
import './index.scss'

import HousingPage from './components/Pages/HousingPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Main from './components/Main/Main.jsx';
import FlatPage from './components/Pages/FlatPage.jsx';

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
        element: <FlatPage />
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
