import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/todoProvider";

function TodoListFrom() {
  const { state } = useContext(TodoContext);
  console.log(state);
  const [task, setTask] = useState("");
  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: "Ajsdjahsd",
      title: task,
      isCompleted: false,
    };
    console.log(todo);
  };
  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={handelSubmit}>
        <label htmlFor="Todo">Task</label>
        <input
          type="text"
          name="todo"
          id="todo"
          onBlur={(e) => {
            setTask(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default TodoListFrom;
