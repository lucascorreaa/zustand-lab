import "./App.css";
import { useCounterStore } from "./stores/store";

const App = () => {
  const count = useCounterStore((state) => state.count);

  return <OtherComponent count={count} />;
};

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-wrapper">
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </div>
  );
};

export default App;
