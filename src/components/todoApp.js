import { useState } from "react";
import Todo from "./todo";
import '../stylesheets/todoApp.css'

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    const value = e.target.value;

    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(title){
      const newTodo = {
        id: crypto.randomUUID(),
        title: title,
        completed: false
      };
  
      const temp = [...todos];
      temp.unshift(newTodo);
  
      setTodos(temp);
  
      setTitle("");
    }
  }

  function handleUpdate(id, value) {

    if(title) {
      const temp = [...todos];
      const item = temp.find(item => item.id === id);
      item.title = value;
      setTodos(temp)
    }

  }

  function handleDelete(id) {
    const temp = todos.filter(item => item.id !== id);
    setTodos(temp)
  }

  return (
    <div className="todoContainer">
      <form onSubmit={handleSubmit} className="todoCreateForm">
        <input onChange={handleChange} className="todoInput" value={title} />
        <input
          onClick={handleSubmit}
          type="submit"
          value="Create todo"
          className="buttonCreate"
        />
      </form>

      <div className="todosContainer">
        {
          todos.map(item => (
            <Todo
              key={item.id} 
              item={item} 
              onUpdate={handleUpdate}
              onDelete={handleDelete} /> /* el key es importante para ayudar a react a reconocer el orden en que se van renderizando los elementos y distinguirlos en jsx */
          ))
        }
      </div>
    </div>
  );
}
