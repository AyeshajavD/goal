// AppContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [appSettings, setAppSettings] = useState({
    theme: 'light',
    fontSize: 'normal',
  });

  useEffect(() => {
  }, [appSettings.theme]);

  const updateSettings = (newSettings) => {
    setAppSettings((prevSettings) => ({ ...prevSettings, ...newSettings }));
  };

  return (
    <AppContext.Provider value={{ appSettings, updateSettings }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
