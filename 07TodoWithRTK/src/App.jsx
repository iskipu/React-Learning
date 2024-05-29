import { useDispatch, useSelector } from "react-redux";
import { addTodo, checker, removeTodo } from "./features/todoSlice";
import { combineSlices, nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
function App() {
  return (
    <>
      <Adder />
      <Displayer />
    </>
  );
}

function Adder() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text, id: nanoid(), complete: false }));
    setText("");
  };
  return (
    <>
      <form onSubmit={handleClick}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" />
      </form>
    </>
  );
}

function Displayer() {
  const todos = useSelector((state) => state.funny.todos);
  const dispatch = useDispatch();
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <>
            <li key={todo.id}>{todo.text}</li>
            <button
              onClick={(e) => {
                dispatch(removeTodo(todo.id));
              }}
            >
              Delete
            </button>
          </>
        ))}
      </ul>
    </>
  );
}
export default App;
