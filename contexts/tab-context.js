"use client";

import { createContext, useContext, useState } from "react";

export const TabsContext = createContext(null);

const TabsContextProvider = ({ children }) => {
  const [currentTab, setCurrentTab] = useState(() => "environment");

  return (
    <TabsContext.Provider
      value={{
        currentTab,
        setCurrentTab,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error(
      "useTabsContext context must be used within TabsContextProvider",
    );
  }
  return context;
};

export default TabsContextProvider;
