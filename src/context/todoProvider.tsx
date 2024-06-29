import React, { createContext } from "react";

const todoContext = createContext({});
export default function todoProvider() {
  const values = {};
  return <todoContext.Provider value={values}></todoContext.Provider>;
}
