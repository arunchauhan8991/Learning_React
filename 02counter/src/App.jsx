import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(5)


  const addValue = () =>{
    if(counter > 19) return
    setCounter(counter+1)
  }

  const removeValue = () => {
    if (counter < 1) return
    setCounter(counter-1)
  }

  return (
    <>
    <h1>hello</h1>
    <h2>counter value is : {counter}</h2>
    <button onClick={addValue}>Add Value {counter}</button>
    <br/>
    <button onClick={removeValue}>Remove value {counter}</button>
    <p> footer ::  {counter}</p>
    </>
  )
}

export default App
