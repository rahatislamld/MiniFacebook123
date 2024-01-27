// File: ChangeContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context with an initial state
const ChangeContext = createContext();

// Create a provider component
export const ChangeProvider = ({ children }) => {
  const [isChanged, setIsChanged] = useState(false);

  // Function to toggle the state
  const toggleChange = () => {
    setIsChanged((prevIsChanged) => !prevIsChanged);
  };

  // Value object to be provided to consumers
  const value = {
    isChanged,
    toggleChange,
  };

  return (
    <ChangeContext.Provider value={value}>
      {children}
    </ChangeContext.Provider>
  );
};

// Custom hook to access the context
export const useChange = () => {
  const context = useContext(ChangeContext);

  if (!context) {
    throw new Error('useChange must be used within a ChangeProvider');
  }

  return context;
};
