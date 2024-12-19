import { useState} from 'react'
import './App.css';
import {Title} from './Components/Title';

function App() { 
  const [isShow, setIsShow]=useState("true");

  const handleToggle =()=>{
     setIsShow(prev => !prev);
  }

  return (
    <div>
      {isShow && <Title/>}
      <button className='btn' onClick={handleToggle}>{isShow ? "Hide" : "Show"}</button>
    </div>
)}


export default App
