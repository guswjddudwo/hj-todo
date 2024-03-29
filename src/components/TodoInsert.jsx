import { useState } from "react";
import styled from "styled-components";
import {MdAdd as AddIcon} from "react-icons/md"


const TodoInsertWrapper = styled.form`
  display: flex;
  background: #6e798b;
`

const StyledInput = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  line-height: 1.5;
  color: #fff;
  flex: 1; 

  &::placeholder {
    color: #fff;
  }
`

const StyledButton = styled.button`
  border: none;
  background: #868e96;
  color: #fff;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`


function TodoInsert({onInsert}) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    onInsert(value);
    setValue('');
    e.preventDefault();
  }


  return ( 
    <TodoInsertWrapper onSubmit={handleSubmit}>
      <StyledInput 
        type="text" 
        placeholder="할 일을 입력하세요." 
        value={value}
        onChange={handleChange}
      />
      <StyledButton type="submit">
        <AddIcon />
      </StyledButton>
    </TodoInsertWrapper>
   );
}

export default TodoInsert;