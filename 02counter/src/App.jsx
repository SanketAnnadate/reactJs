import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);
  const addValue = () => {
    if(counter >= 20) {
      setCounter(20);
      return;
    }
    setCounter(counter + 1);
    setCounter(prevCounter => prevCounter + 1);
  }

  const removeValue = () => {
    if(counter <= 0) {
      setCounter(0);
      return;
    }
    setCounter(counter - 1);
  }
  return (
    <>
        <h1>Chai or react</h1>
        <h2>Counter value: {counter}</h2>

        <button onClick={addValue}>Add Value</button>
        <br/>
        <button onClick={removeValue}>Remove Value</button>
        <br/>
        <footer>Footer: {counter}</footer>
    </>
  )
}

export default App
