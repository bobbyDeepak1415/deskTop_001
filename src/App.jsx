import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  MultiplyByAmount,
  reset,
} from "./redux/CounterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.count.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count at:{count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(MultiplyByAmount(10))}>*10</button>
    </div>
  );
};

export default App;
