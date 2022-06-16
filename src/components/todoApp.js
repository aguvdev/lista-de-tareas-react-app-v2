import { useState } from "react";

export default function TodoApp() {
  const [title, setTitle] = useState("Nestor");
  const [todos, setTodos] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    setTitle("Agustin");
  }

  function handleChange(e) {
    const value = e.target.value;

    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false
    };

    const temp = [...todos];
    temp.unshift(newTodo);

    setTodos(temp)
  }

  return (
    <div className="todoContainer">
      <form onSubmit={handleSubmit} className="todoCreateForm">
        <input onChange={handleChange} className="todoInput" />
        <input
          onClick={handleClick}
          type="submit"
          value="Create todo"
          className="buttonCreate"
        />
      </form>
    </div>
  );
}
