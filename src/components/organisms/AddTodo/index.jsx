import { InputForm } from "../../atoms";
import styles from "./styles.module.css";

export const AddTodo = (props) => {
  const { addInputValue, onChangeAddInputValue, handleAddTodo } = props;
  return (
    <section className={styles.common}>
      <h2 className={styles.subTitle}>{"ADD TODO"}</h2>
      <InputForm
        placeholder={"New Todo"}
        inputValue={addInputValue}
        handleChangeValue={onChangeAddInputValue}
        handleKeyDown={handleAddTodo}
      />
    </section>
  );
};
