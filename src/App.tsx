import "./App.css";
import TodoList from "./components/todo/TodoList";
import TodoListFrom from "./components/todo/TodoListFrom";

import TodoProvider from "./context/todoProvider";

function App() {
  return (
    <div className="w-4/4">
      <TodoProvider>
        <div className="text-3xl font-bold  todo">
          <TodoListFrom></TodoListFrom>
          <TodoList />
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
