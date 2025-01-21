import React from 'react'
import "./Error404Page.scss";
import Navbar from '../../components/Navbar/Navbar';
import Main from '../../components/Main/Main';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

function Error404Page() {
  return (
  <>
  <Navbar /> 
  <Main>
    <div className='not-found-page'>
    <h1>404</h1>
    <h2>Oups! La page que vous demandez n'existe pas</h2>
    <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  </Main>
  <Footer />
  </>
  )
}

export default Error404Page