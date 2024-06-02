/**
 * TodoPage
 *
 * @package pages
 */
import styles from "./styles.module.css";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../../../constants/data.js";

/**
 * TodoPage
 * @returns {JSX.Element}
 * @constructor
 */
export const TodoTemplate = () => {
  /* todo list */
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
  /* add input title */
  const [addInputValue, setAddInputValue] = useState("");
  /* todo 採番ID */
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);
  /* search input title */
  const [searchInputValue, setSearchInputValue] = useState("");

  const onChangeAddInputValue = (e) => {
    setAddInputValue(e.target.value);
  };

  const onChangeSearchInputValue = (e) => {
    setSearchInputValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    if (e.key === "Enter" && addInputValue !== "") {
      const nextUniqueId = uniqueId + 1;
      const newTodoList = [
        ...originTodoList,
        {
          id: nextUniqueId,
          title: addInputValue,
        },
      ];
      setOriginTodoList(newTodoList);
      // 採番IDを更新
      setUniqueId(nextUniqueId);
      // todo追加後、入力値をリセット
      setAddInputValue("");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      {/* タスク入力画面 */}
      <section className={styles.common}>
        <h2 className={styles.subTitle}>ADD TODO</h2>
        <input
          className={styles.input}
          type="text"
          placeholder="New Todo"
          value={addInputValue}
          onChange={onChangeAddInputValue}
          onKeyDown={handleAddTodo}
        />
      </section>
      {/* タスク絞り込み画面 */}
      <section className={styles.common}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search Keyword"
          value={searchInputValue}
          onChange={onChangeSearchInputValue}
        />
      </section>
      {/* タスク一覧表示画面 */}
      <section className={styles.common}>
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
                    <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                  </div>
                </li>
              );
            })}
        </ul>
      </section>
    </div>
  );
};
