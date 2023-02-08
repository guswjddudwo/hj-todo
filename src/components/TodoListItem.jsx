import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";
import styled, { css } from "styled-components";


const TodoListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  &:nth-child(even) {
    background: #8287b9;
  }
  & + & {
    border-top: 1px solid #6e798b;
  }
`;

const Checkbox = styled.div`
cursor: pointer;
display: flex;
align-items: center;
svg {
    font-size: 1.5rem;
    color: ${props => props.checked && '#ff0000'}
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1; 

  ${props => props.checked &&
    css`
      color: #887a7a;
      text-decoration: line-through;
    `}
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ca1717;
  cursor: pointer;
  &:hover {
    color: #000000;
  }
`;




function TodoListItem({ todo, onRemove, onToggle }) {
  // console.log(todo)
  const { id, text, checked } = todo;

  return (
    <TodoListItemWrapper>
    <Checkbox Checkbox={checked} onClick={() => { onToggle(id);}}>
      {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
    </Checkbox>
    <Text checked={checked}>{text}</Text>
    <Remove onClick={() => { onRemove(id); }}>
      <MdRemoveCircleOutline />
    </Remove>
  </TodoListItemWrapper>
  );
}

export default TodoListItem;