import { useDispatch } from "react-redux"
import { decrement } from "./redux/CounterSlice"

const App = () => {


  const dispatch=useDispatch()



  return (
    <div>
      <h2>Count at:{}</h2>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default App
