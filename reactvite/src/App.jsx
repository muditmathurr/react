import New from "./New"
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0) // using hooks (useState for changing state on UI)

  const addValue = ()=> {
    counter = counter + 1
    setCounter(counter) 
  }

  const subValue = ()=> {
    setCounter(counter - 1)
  }
  return (
    <>
    <h1>The First Project</h1>
    <h2> Counter value is {counter}</h2>
    <button 
    onClick={addValue}>Add Count</button>
    
    <button
    onClick={subValue}>Subtract Count</button>
    </>
  )
}

export default App
