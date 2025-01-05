import { useEffect } from "react";
import "./App.css";
import { useCounterStore } from "./stores/store";

const setState = () => {
  // set um estado
  useCounterStore.setState({ count: 11 })
}

const logCount = () => {
  // busca o estado
  const count = useCounterStore.getState().count
  console.log('count', count)
}

const App = () => {
  const count = useCounterStore((state) => state.count);

  return <OtherComponent count={count} />;
};

const OtherComponent = ({ count }: { count: number }) => {
  // const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)
  // esse incremento aguarda 1s para realizar a ação
  const incrementAsync = useCounterStore((state) => state.incrementAsync)

  useEffect(() => {
    setState()
  }, [])

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-wrapper">
        <button onClick={incrementAsync}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </div>
  );
};

export default App;
