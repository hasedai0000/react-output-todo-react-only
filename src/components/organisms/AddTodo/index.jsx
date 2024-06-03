import styles from "./styles.module.css";

export const AddTodo = (props) => {
  const { addInputValue, onChangeAddInputValue, handleAddTodo } = props;
  return (
    <section className={styles.common}>
      <h2 className={styles.subTitle}>{"ADD TODO"}</h2>
      <input
        className={styles.input}
        type="text"
        placeholder={"New Todo"}
        value={addInputValue}
        onChange={onChangeAddInputValue}
        onKeyDown={handleAddTodo}
      />
    </section>
  );
};
