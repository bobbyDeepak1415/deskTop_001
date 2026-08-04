import { useDispatch, useSelector } from "react-redux"
import { decrement } from "./redux/CounterSlice"

const App = () => {


  const count=useSelector(state=>state.counter.count)

  const dispatch=useDispatch()



  return (
    <div>
      <h2>Count at:{count}</h2>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default App
