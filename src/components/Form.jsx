import { useState } from "react";
import styles from "./Form.module.css";

// Receive the setTodos function as a prop
export default function Form({ setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((prevTodos) => [...prevTodos, todo]); // Update the shared state
    setTodo({ name: "", done: false });
  }

  return (
    <>
      {/* Form box with input & button */}
      <form className={styles.todo} onSubmit={handleSubmit}>
        <div className={styles.context}>
          <div className={styles.form}>
            <input
              className={styles.input}
              onChange={(e) => setTodo({ name: e.target.value, done: false })}
              type="text"
              value={todo.name}
              placeholder="Enter todo item"
            />
            <button type="submit" className={styles.btn}>
              Add Todo
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
