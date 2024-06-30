import { useContext } from "react";
import { TodoContext } from "../../context/todoProvider";

const { todoTitle } = useContext(TodoContext);

function TodoListFrom() {
  return <div>{todoTitle}</div>;
}
export default TodoListFrom;
