import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./footer";

export default function Todo() {
  const [todos, setTodos] = useState([]); // This is now the single source of truth for todos
  const completeTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  return (
    <div>
      <Form setTodos={setTodos} /> {/* Pass only the setter function */}
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completeTodos={completeTodos} totalTodos={totalTodos} />
    </div>
  );
}
