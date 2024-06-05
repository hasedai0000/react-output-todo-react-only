/**
 * AddTodo
 *
 * @package components
 */
import { InputForm } from "../../atoms";
import styles from "./styles.module.css";

/**
 * AddTodo
 * @param {*} props
 * @returns
 */
export const AddTodo = (props) => {
  /* props */
  const { addInputValue, onChangeAddInputValue, handleAddTodo } = props;
  return (
    <>
      <h2 className={styles.subTitle}>{"ADD TODO"}</h2>
      <InputForm
        placeholder={"New Todo"}
        inputValue={addInputValue}
        handleChangeValue={onChangeAddInputValue}
        handleKeyDown={handleAddTodo}
      />
    </>
  );
};
