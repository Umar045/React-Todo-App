import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className={styles.listContainer}>
      {sortedTodos.length > 0 ? (
        sortedTodos.map((item) => (
          <TodoItem
            key={item.name}
            item={item}
            todos={todos}
            setTodos={setTodos}
          />
        ))
      ) : (
        <p className={styles.emptyMessage}>No items to display</p>
      )}
    </div>
  );
}
