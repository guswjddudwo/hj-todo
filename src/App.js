import React, { useState } from 'react';
import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';
import { v4 as uuidv4 } from "uuid";

import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';


const GlobalStyle = createGlobalStyle`

${reset}
body {
  background: gray;
}
`

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '수업 교안 작성하기',
      checked: true
    },
    {
      id: 2,
      text: '시험 채점하기',
      checked: true
    },
    {
      id: 3,
      text: '단계별 실습 예제 만들기',
      checked: false
    }
  ]);
// useEffect(() => {
//   const dbTodos = JSON.parse(localStorage.getItem('todos')) || [];
//   setTodos(dbTodos);
// }, []);


  return (
    <>
    <GlobalStyle/>
        <TodoTemplate>
          <TodoInsert />
          <TodoList todos={todos}/>
        </TodoTemplate>
    </>
  );
}

export default App;