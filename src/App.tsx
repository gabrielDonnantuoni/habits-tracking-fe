// import { useState } from 'react'
import { Habit } from './components'
import './styles/global.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Habit completed={10} />
      <Habit completed={20} />
      <Habit completed={30} />
      <Habit completed={40} />
    </div>
  )
}

export default App
