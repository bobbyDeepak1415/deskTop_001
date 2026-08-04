import { useState } from "react"

function App() {


  const [count,setCount]=useState(0)

  return (
  <div>
  <h2>count at:{count}</h2>
  <button>-</button>
  <button>-</button>
  </div>
  )
}

export default App



