import "./App.css";
import { useEffect } from "react";
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

  // buscando as funções usando desestruturação, acredito que afeta a performance por buscar todos as variáveis durante a busca...
  const { reset } = useCounterStore()

  useEffect(() => {

    // setState()
    // logCount, para usar esse, precisa adicionar o count como dependência

  }, [])

  return (
    <div className="container">
      <h1>Zustand-Lab</h1>
      <h1>{count}</h1>
      <div className="button-wrapper">
        <button onClick={incrementAsync}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default App;
