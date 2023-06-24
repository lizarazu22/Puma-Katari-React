import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { AppContext } from '../context/AppContext';

const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Inicio</h1>
      {/* Contenido de la página principal */}
    </div>
  );
};

export default IndexPage;
