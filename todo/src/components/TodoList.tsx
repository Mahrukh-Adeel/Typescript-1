import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

function TodoList({ todos, onToggle, onDelete, onEdit }: TodoProps) {
  return (
    <div className="border border-pink-300 rounded-lg bg-white shadow-sm">
      {todos.length === 0 ? (
        <p className="p-4 text-center text-gray-600 font-bold">No todos yet.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;