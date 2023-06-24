import React from 'react';
import { useForm } from 'react-hook-form';
import { AppContext } from '../context/AppContext';

const BusRoutesPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // Lógica para buscar rutas y horarios específicos de los buses
  };

  return (
    <div>
      <h1>Rutas de Buses</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Formulario de búsqueda de rutas */}
      </form>
      {/* Mostrar resultados de las rutas */}
    </div>
  );
};

export default BusRoutesPage;
