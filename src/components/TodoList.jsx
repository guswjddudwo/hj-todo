import styled from "styled-components";
import TodoListItem from "./TodoListItem"

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

function TodoList({todos, onRemove, onToggle}) {
  return (
    <TodoListWrapper>
    {todos.map((todo) => 
      <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
    )}
  </TodoListWrapper>
  );
}

export default TodoList;