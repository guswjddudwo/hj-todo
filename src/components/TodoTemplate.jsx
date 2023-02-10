import { children } from "react";
import styled from "styled-components";



const TodoTemplateWrapper = styled.div`
  background: #ffffff;
  width: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;

  h1 {
      margin: 0 auto;
      font-size: 1.5rem;
      color: #343a40;
      display: flex;
  justify-content: center;
  align-items: center;
    }
  .tasks-left {
    color: #ff8f8f;
    font-size: 18px;
    margin: .3rem 0 .3rem 21rem;
    font-weight: bold;
  }
.app-title {
  background: #ffffff;
  color: #a4abeb;
  height: 4rem;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  background: #e0e0e0;
}
`

function TodoTemplate(props) {
  const {children}=props;
// 구조분해 할당 
// const todos = useTodoState();
// const undoneTasks = todos.filter(todo => !todo.done);

  return (
    <TodoTemplateWrapper>
      <div className="app-title">TODO List</div>
      <h1> {new Date().toLocaleDateString()}</h1>
      {/* <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div> */}
      <div className="content">{children}</div>
    </TodoTemplateWrapper>
  );
}

export default TodoTemplate;