/**
 * TodoPage
 *
 * @package pages
 */
import styles from "./styles.module.css";
import { useState } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../../../constants/data.js";
import { AddTodo } from "../../organisms/AddTodo/index.jsx";
import { TodoList } from "../../organisms/TodoList/index.jsx";

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

  /**
   * Todo登録処理
   * @param { * } e
   */
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

  /**
   * Todo削除処理
   * @param { number } targetId
   * @param { string } targetTitle
   */
  const handleDeleteTodo = (targetId, targetTitle) => {
    console.log(targetId, targetTitle);
    if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
      const newTodoList = originTodoList.filter((todo) => todo.id !== targetId);
      setOriginTodoList(newTodoList);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      {/* タスク入力画面 */}
      <section className={styles.common}>
        <AddTodo
          addInputValue={addInputValue}
          onChangeAddInputValue={onChangeAddInputValue}
          handleAddTodo={handleAddTodo}
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
        {originTodoList.length > 0 && (
          <TodoList
            originTodoList={originTodoList}
            searchInputValue={searchInputValue}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      </section>
    </div>
  );
};
