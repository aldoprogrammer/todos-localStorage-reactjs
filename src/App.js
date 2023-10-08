import { useEffect } from 'react';
import './App.css';
import Todo from './components/todo';


function App() {
 

  return (
    <div className='container border
    border-primary rounded mt-5'
      style={{ 
        background: `url(https://img.freepik.com/free-photo/psychedelic-paper-shapes-with-copy-space_23-2149378246.jpg)`,
        backgroundSize: 'cover'
       }}
       >
       <Todo />
    </div>
  );
}

export default App;
