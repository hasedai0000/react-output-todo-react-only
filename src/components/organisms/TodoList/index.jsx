/**
 * TodoList
 *
 * @package components
 */
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* styles */
import styles from "./styles.module.css";

/**
 * TodoList
 * @param {*} props
 * @returns
 */
export const TodoList = (props) => {
  /* props */
  const { originTodoList, searchInputValue, handleDeleteTodo } = props;

  return (
    <ul className={styles.list}>
      {originTodoList
        .filter((todo) => {
          const isMatch = todo.title.indexOf(searchInputValue) !== -1;
          return isMatch;
        })
        .map((todo) => {
          return (
            <li className={styles.todo} key={todo.id}>
              <span className={styles.task}>{todo.title}</span>
              <div className={styles.far}>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  size="lg"
                  onClick={() => handleDeleteTodo(todo.id, todo.title)}
                />
              </div>
            </li>
          );
        })}
    </ul>
  );
};
