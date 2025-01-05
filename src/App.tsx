import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return <OtherComponent count={count} />
}

const OtherComponent = ({count}: {count: number}) => {
  return <h1>{count}</h1>
}

export default App
