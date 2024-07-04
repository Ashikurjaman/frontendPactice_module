import React, { useContext } from "react";
import { TodoContext, TTodo } from "../../context/todoProvider";

export default function TodoList() {
  const { state, dispatch } = useContext(TodoContext);
  return (
    <div>
      {state.map((item: TTodo) => (
        <p
          onClick={() => dispatch({ type: "taskCompleted", payload: item.id })}
          className={`cursor-pointer ${item.isCompleted ? `line-through` : ""}`}
          key={item.id}
        >
          {item.title}
        </p>
      ))}
    </div>
  );
}
