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

  const today = new Date();

  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const dayName = today.toLocaleString();

  return (
    <TodoTemplateWrapper>
      <div className="app-title">TODO LIST</div>
      <h1>{dateString}</h1>
      <div className="content">{children}</div>
    </TodoTemplateWrapper>
  );
}

export default TodoTemplate;