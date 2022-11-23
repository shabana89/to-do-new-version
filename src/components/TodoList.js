import Todo from "./Todo";

import styles from "../style.module.css";

const TodoList = ({ todoList }) => {
  return (
    <div>
      {todoList.map((todoItem) => (
        <Todo todoItem={todoItem}></Todo>
      ))}
    </div>
  );
};
export default TodoList;
