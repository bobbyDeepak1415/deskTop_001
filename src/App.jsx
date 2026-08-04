import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/CounterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count at:{count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default App;
