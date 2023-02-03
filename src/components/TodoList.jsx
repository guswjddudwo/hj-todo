import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ totos }) {
  return (
    <div>
      {totos.map((todo) => {
        <TodoListItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
}

export default TodoList;
