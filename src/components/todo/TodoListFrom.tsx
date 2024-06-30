import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/todoProvider";

const { state: TTodo } = useContext(TodoContext);
const [task, setTask] = useState("");
// console.log(state);
function TodoListFrom() {
  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    const todo = {
      id: "ajsdjahsd",
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
