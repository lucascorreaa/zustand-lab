import './App.css'
import { useCounterStore } from './stores/store'

const App = () => {
  const count = useCounterStore(state => state.count)

  return <OtherComponent count={count} />
}

const OtherComponent = ({count}: {count: number}) => {
  return <h1>{count}</h1>
}

export default App
