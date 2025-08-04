import { useState } from "react";
import TodoList from "./components/TodoList";
import useLocalStorage from "./hooks/useLocalStorage";
import type { Todo } from "./types/todo";

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [input, setInput] = useState("");

  const generateId = () => Math.floor(Math.random() * 1000000);

  const handleAddTodo = () => {
    if (input.trim() === "") return;
    const newTodo: Todo = {
      id: generateId(),
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: number, newText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="p-4 w-full h-screen bg-rose-50">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-pink-800 text-center"> Todo App</h1>
        <div className="flex gap-2 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-pink-300 px-2 py-1 flex-grow rounded focus:border-pink-400"
            placeholder="Add a new todo"
          />
          <button 
            onClick={handleAddTodo} 
            className="bg-pink-500 text-white px-4 py-1 rounded border border-pink-600 font-bold hover:bg-pink-600"
          >
            Add
          </button>
        </div>
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;