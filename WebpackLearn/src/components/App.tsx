import { useState } from "react"
import classes from './App.module.scss'

export const App = () => {
    const [count, setCount] = useState(0);
    const inctement = () => setCount(prev => prev + 1)
  return (
    <div>
    <div className={classes.item}>{count}</div>
    <button className={classes.button} onClick={inctement}>Click</button>
    </div>
  )
}
