import styles from "./footer.module.css";
export default function Footer({ completeTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed todos:{completeTodos}</span>
      <span>Total todos:{totalTodos}</span>
    </div>
  );
}
