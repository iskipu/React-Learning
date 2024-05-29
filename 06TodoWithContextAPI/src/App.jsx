import { useEffect, useState } from "react";
import { TodoProvider, todoConsumer } from "./context/Todo";

function App() {
  const [todo, setTodo] = useState([]);
  console.log(todo);
  const addTodo = (todo) => {
    setTodo((prev) => [...prev, todo]);
  };

  const delteTodo = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, utodo) => {
    setTodo(
      todo.map((td) => {
        if (td.id === id) {
          return utodo;
        } else {
          return td;
        }
      })
    );
  };

  useEffect(() => {
    const data = localStorage.getItem("todo");
    if (data) {
      setTodo(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  return (
    <TodoProvider value={{ todo, addTodo, delteTodo, updateTodo }}>
      <Add />
      {todo.map((item) => (
        <TItem item={item} key={item.id} />
      ))}
    </TodoProvider>
  );
}

function Add() {
  const [ti, setTi] = useState("");
  const { addTodo } = todoConsumer();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo({ id: Date.now(), title: ti, completed: false });
          setTi("");
        }}
      >
        <input type="text" onChange={(e) => setTi(e.target.value)} value={ti} />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

function TItem({ item }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(item.title);
  const [completed, setCompleted] = useState(item.completed);

  const { updateTodo, delteTodo } = todoConsumer();
  return (
    <div className="flex bg-pink-300 gap-3">
      <input
        type="text"
        value={text}
        className={`bg-transparent ${completed ? "line-through" : ""}`}
        disabled={!edit}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          if (edit) {
            updateTodo(item.id, {
              id: item.id,
              title: text,
              completed: item.completed,
            });
          }
          setEdit((prev) => !prev);
        }}
        className="disabled:opacity-50"
        disabled={completed}
      >
        {edit ? "Save" : "Edit"}
      </button>
      <button
        onClick={() => {
          delteTodo(item.id);
        }}
      >
        Delete
      </button>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => {
          setCompleted((prev) => !prev);
          updateTodo(item.id, {
            id: item.id,
            title: item.title,
            completed: e.target.checked ? true : false,
          });
        }}
      />
    </div>
  );
}
export default App;
