import { Children } from "react";
import styled from "styled-components";


const TodoTemplateWrapper = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;

.app-title {
  background: yellow;
  color: #fff;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  background: #fff;
}


`

function TodoTemplate(props) {
  const {Children}=props;
  return (
    <TodoTemplateWrapper>
      <div className="app-title">TODO List</div>
      <div className="content">{Children}</div>
    </TodoTemplateWrapper>
  );
}

export default TodoTemplate;