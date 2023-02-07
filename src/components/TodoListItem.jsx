import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";
import styled, { css } from "styled-components";


const TodoListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  &:nth-child(even) {
    background: #000;
  }
  & + & {
    border-top: 1px solid red;
  }
`;

const Checkbox = styled.div`
cursor: pointer;
display: flex;
align-items: center;
svg {
    /* 아이콘 스타일링 */
    font-size: 1.5rem;

    /* 체크되었을 때 보여 줄 스타일 */
    color: ${props => props.checked && '#22b8cf'}
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1; // 차지할 수 있는 영역 모두 차지

  /* 체크되었을 때 보여 줄 스타일 */
  /* 조건부 스타일링 시 여러 개의 css를 설정할 때는 아래 형식으로 사용 */
  ${props => props.checked &&
    css`
      color: #adb5bd;
      text-decoration: line-through;
    `}
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;






function TodoListItem({ todo, onRemove, onToggle }) {
  const { id, text, checked } = todo;

  return (
    <TodoListItemWrapper>
    <Checkbox checked={checked} onClick={() => { onToggle(id); }}>
      {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
    </Checkbox>
    <Text checked={checked}>{text}</Text>
    <Remove onClick={() => { onRemove(id); }}>
      <MdRemoveCircleOutline />
    </Remove>
  </TodoListItemWrapper>
  );
}

export default TodoListItem;