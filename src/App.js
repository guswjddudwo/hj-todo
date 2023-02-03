import logo from "./logo.svg";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import { useState } from "react";

const GlobalSttle = createGlobalStyle`
body{
  background-color: coral;
} 
`;

function App() {
  const [todos, setTodos] = useState("");
  return (
    <>
      <GlobalSttle />
      <TodoTemplate>
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
