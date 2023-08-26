"use client";

import { createContext, useContext, useState } from "react";

export const LightboxContext = createContext(null);

const LightboxContextProvider = ({ children }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);

  return (
    <LightboxContext.Provider
      value={{
        isLightboxOpen,
        currentIndex,
        setIsLightboxOpen,
        setCurrentIndex,
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
};

export const useLightboxContext = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error(
      "useLightbox context must be used within LightboxContextProvider",
    );
  }
  return context;
};

export default LightboxContextProvider;
