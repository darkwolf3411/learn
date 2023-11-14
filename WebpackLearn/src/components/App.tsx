import { useState } from "react"

export const App = () => {
    const [count, setCount] = useState(0);
    const inctement = () => setCount(prev => prev + 1)
  return (
    <div>
    <div>{count}</div>
    <button onClick={inctement}>Click</button>
    </div>
  )
}
