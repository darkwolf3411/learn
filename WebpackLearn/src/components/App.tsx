import { useState } from "react"
import './App.scss'

export const App = () => {
    const [count, setCount] = useState(0);
    const inctement = () => setCount(prev => prev + 1)
  return (
    <div>
    <div>{count}</div>
    <button onClick={inctement}></button>
    </div>
  )
}
