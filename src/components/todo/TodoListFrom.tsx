import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/todoProvider";

function TodoListFrom() {
  const { state, dispatch } = useContext(TodoContext);
  console.log(state);
  const [task, setTask] = useState("");
  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompleted: false,
    };
    dispatch({ type: "addTodo", payload: todo });
  };
  return (
    <div className="">
      <div>
        <h1 className="p-5">Add Todo</h1>
      </div>
      <form onSubmit={handelSubmit}>
        <label className="pt-2 pl-5" htmlFor="Todo">
          Task
        </label>
        <input
          className="border border-red-400 pl-3"
          type="text"
          name="todo"
          id="todo"
          onBlur={(e) => {
            setTask(e.target.value);
          }}
        />
        <button className="btn btn-primary p-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default TodoListFrom;
