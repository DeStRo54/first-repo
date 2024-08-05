import { useState } from "react";
import styles from "./ToDoList.module.css";
import { ACTIONS_DATA } from "../../const/keys.js";
import TasksList from "../TasksList/TasksList.jsx";

const ToDoList = () => {
  const [inputValue, getInputValue] = useState("");
  const [actions, getActions] = useState(
    JSON.parse(localStorage.getItem(ACTIONS_DATA) || "[]")
  );

  const handleChange = (e) => {
    getInputValue(e.target.value);
  };

  const addTask = () => {
    const prev = JSON.parse(localStorage.getItem(ACTIONS_DATA) || "[]");

    const task = {
      id: Date.now(),
      value: inputValue,
    };

    getActions([...prev, task]);

    localStorage.setItem(ACTIONS_DATA, JSON.stringify([...prev, task]));
  };

  const deleteTask = (index) => {
    let lostData = actions.filter((item) => item.id != index);
    localStorage.setItem(ACTIONS_DATA, JSON.stringify(lostData));
    getActions(lostData);
  };

  return (
    <div className={styles.header}>
      <span>TO-DO-LIST</span>
      <div className={styles.container}>
        <div className={styles["list-form"]}>
          <div className={styles["list-form-header"]}>
            <input type="text" onChange={handleChange} value={inputValue} />
            <button
              disabled={inputValue === "" ? true : false}
              type="button"
              onClick={addTask}
            >
              Add
            </button>
          </div>
          <TasksList data={actions} deleteTask={deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
