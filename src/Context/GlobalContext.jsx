import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  let [count, setCount] = useState(0);

  function AddCount() {
    setCount((count += 1));
  }
  function MultiplyCount() {
    setCount((count *= 2));
  }

  return (
    <AppContext.Provider value={{ count, AddCount, MultiplyCount }}>
      {children}
    </AppContext.Provider>
  );
};

function GlobalContext() {
  return useContext(AppContext);
}

export { AppContext, AppProvider, GlobalContext };
