import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

function App() {


  // const [count,setCount]=useState(0)

  const count=useSelector()


  const dispatch=useDispatch()

  return (
    <div>
      <h2>count at:{count}</h2>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("increment")}>+</button>
    </div>
  );
}

export default App



