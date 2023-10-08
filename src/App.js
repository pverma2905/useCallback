import { useState, useMemo, useCallback } from 'react';
import './App.css';
import User from './User';

function App() {
  const [add, setAdd] = useState(0)
  const [subtract, setSubtract] = useState(10)

  const multi = useCallback(() => {
    console.log("parent")
  }, [add])


  return (
    <>
      <h1>{multi}</h1>
      <h1>UseCallback ADD {add}</h1>
      <h1>UseCallback Subtract {subtract}</h1>
      <User props={multi} />
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <button onClick={() => setSubtract(subtract - 1)}>Subtraction</button>
    </>
  );
}

export default App;
