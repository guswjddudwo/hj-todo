import logo from './logo.svg';
import './App.css';
import {createGlobalStyle} from 'styled-components';

const GlobalSttle = createGlobalStyle`
body{
  background-color: coral;
} 
`

function App() {
  return (
    <>
    <GlobalSttle />
    <div>영역확인</div>
    </>
  );
}

export default App;
