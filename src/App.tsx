import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserinfoWithReducer from "./components/UserinfoWithReducer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserinfoWithReducer />
    </>
  );
}

export default App;
