import { Children } from "react";
import styled from "styled-components";


const TodoTemplateWrapper = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;

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
  background: #a4abeb;
}


`

function TodoTemplate(props) {
  const {children}=props;
// 구조분해 할당 
  console.log(props)
  return (
    <TodoTemplateWrapper>
      <div className="app-title">TODO List</div>
      <div className="content">{children}</div>
    </TodoTemplateWrapper>
  );
}

export default TodoTemplate;