import { useState } from 'react'
import Navbar from './components/navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Navbar />
        <button>Ajouter une tâche</button>
      </div>
    </>
  )
}

export default App
