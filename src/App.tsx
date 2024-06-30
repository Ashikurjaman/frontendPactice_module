import "./App.css";
import TodoListFrom from "./components/todo/TodoListFrom";

import TodoProvider from "./context/todoProvider";

function App() {
  return (
    <>
      <TodoProvider>
        <div>
          <TodoListFrom></TodoListFrom>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
