import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider, Outlet} from 'react-router-dom';
import './index.scss'

import HousingPage from './Pages/HousingPage/HousingPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Main from './components/Main/Main.jsx';
import FlatPage from './Pages/FlatPage/FlatPage.jsx';
import Apropos from './Pages/Apropos/Apropos.jsx';
import Error404Page from './Pages/Error404Page/Error404Page.jsx';

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

export const router = createBrowserRouter ([

  {
    element: <PageStructure/>,
    errorElement:<Error404Page />,
    children: [
      {
      path: "/",
      element: <HousingPage />
      },
      {
        path: "/flatlink",
        element: <FlatPage />
      },  
      {
        path: "/about",
        element: <Apropos />
      },    
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />  {/* Fournit le routeur pour gérer les routes */}
  </StrictMode>,
);
