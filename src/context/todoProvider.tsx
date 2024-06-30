import React, { createContext, ReactNode } from "react";

export const TodoContext = createContext(undefined);
type TodoProviderProps = {
  children: ReactNode;
};
export default function TodoProvider({ children }: TodoProviderProps) {
  const values = {
    todoTitle: "This is a todo title",
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
}
