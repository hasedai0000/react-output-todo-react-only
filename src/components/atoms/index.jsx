/**
 * InputForm
 *
 * @package components
 */
import styles from "./styles.module.css";

/**
 * InputForm
 * @param {*} props
 * @returns
 */
export const InputForm = (props) => {
  const { placeholder, inputValue, handleChangeValue, handleKeyDown } = props;
  return (
    <input
      className={styles.input}
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChangeValue}
      onKeyDown={handleKeyDown}
    />
  );
};
