import { useDispatch, useSelector } from "react-redux"

function App() {



  const count=useSelector(state=>state.counter.value)


  const dispatch=useDispatch()

  return (
    <div>
      <h2>count at:{count}</h2>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("increment")}>+</button>
      {/* <button onClick={() => dispatch("")}>Add2</button> */}
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}

export default App



