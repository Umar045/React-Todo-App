import styles from "./TodoList.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("delted", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    const newAarray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newAarray);
  }
  const classDone = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <h1>
          <span className={classDone} onClick={() => handleClick(item.name)}>
            {item.name}
          </span>
          <span>
            <button
              onClick={() => handleDelete(item)}
              className={styles.delBtn}
            >
              x
            </button>
          </span>
        </h1>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
