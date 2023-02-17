import { useCallback, useEffect, useRef, useState } from "react";
import { createGlobalStyle } from "styled-components";
// import { Reset } from "styled-reset";
import reset from "styled-reset";
import { v4 as uuidv4 } from "uuid";

import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";


const GlobalStyle = createGlobalStyle`

  ${reset}

  body {
    background: #e9ecef;
  }
`;

function App() {
  const [todos, setTodos] = useState([
  ]);

  // 로컬 스토리지에서 가져오기
  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(dbTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos]);

 
  const nextId = useRef(4);

  const handleInsert = useCallback((text) => {
      const todo = {
        id: uuidv4(),
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));

      nextId.current += 1; 
    },
    [todos]
  );


  const handleRemove = useCallback((id) => {
    
      setTodos(todos.filter((todo) => todo.id !== id));
    },[todos]);


  const handleToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo));},[todos]);

  return (
    <>
      {/* <Reset /> */}
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

