import React, {  useCallback, useEffect, useRef, useState } from 'react';
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

  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(dbTodos);
  }, []);
  const nextId = useRef(4);
  const handleInsert = useCallback(
    (text) => {
      const todo = {
        id: uuidv4(),
        text,
        checked: false,
      };

      setTodos(todos.concat(todo)); 

      nextId.current += 1; 

      localStorage.setItem("todos", JSON.stringify(todos.concat(todo)));
    },
    [todos]
  );

  const handleRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));

      localStorage.setItem(
        "todos",
        JSON.stringify(todos.filter((todo) => todo.id !== id))
      );
    },
    [todos]
  );

  const handleToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );

      localStorage.setItem(
        "todos",
        JSON.stringify(
          todos.map((todo) =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
          )
        )
      );
    },
    [todos]
  );

  return (
    <>
   <GlobalStyle />
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert} />
        <TodoList
          todos={todos}
          onRemove={handleRemove}
          onToggle={handleToggle}
        />
      </TodoTemplate>
    </>
  );
}

export default App;