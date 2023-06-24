import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [busData, setBusData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Lógica y funciones relacionadas con el estado compartido y la lógica de la aplicación

  return (
    <AppContext.Provider
      value={{
        busData,
        setBusData,
        favorites,
        setFavorites,
        notifications,
        setNotifications,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
