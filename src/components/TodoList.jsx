import styled from "styled-components";
import TodoListItem from "./TodoListItem"

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

function TodoList(props) {
  return (
    <TodoListWrapper>
    <TodoListItem />
  </TodoListWrapper>
  );
}

export default TodoList;