import { useState } from 'react';
import './App.css';
import { Timer } from './components/Timer';
import { Todo } from './components/Todo';

function App() {
    const [count, setCount] = useState(0)
  return (
    <div className="App">
        <h3>Count is: {count}</h3>
        <button onClick={() =>setCount(count + 1)}>Add by 1</button>
      <Todo />
      <Timer />
    </div>
  );
}

export default App;
