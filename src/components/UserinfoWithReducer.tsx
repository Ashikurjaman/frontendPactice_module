import React, { ChangeEvent, useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};
const initialState = {
  name: "",
  age: "",
  hobbies: [] as string[],
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addAge":
      return { ...currentState, age: action.payload };
    case "addHobbies":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };

    default:
      return currentState;
  }
};
const UserinfoWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handelSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
      />
      <input
        type="number"
        name="age"
        placeholder="age"
        onChange={(e) => dispatch({ type: "addAge", payload: e.target.value })}
      />
      <input
        type="text"
        name="hobbies"
        placeholder="hobbies"
        onBlur={(e) =>
          dispatch({ type: "addHobbies", payload: e.target.value })
        }
      />
      <input
        className="btn btn btn-primary py-2"
        type="submit"
        value="Submit"
      />
    </form>
  );
};

export default UserinfoWithReducer;
