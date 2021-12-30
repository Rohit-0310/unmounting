import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Timer } from './components/Timer';
import { Todo } from './components/Todo';

function App() {
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(true)
  return (
    <div className="App">
        <h3>Count is: {count}</h3>
        <button onClick={() =>setCount(count - 1)}>Subtract by 1</button>
        <button onClick={() =>setCount(count + 1)}>Add by 1</button>
      <Todo />
      <Form />

      {show ? <Timer /> : null}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
