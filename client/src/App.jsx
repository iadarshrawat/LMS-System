import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
      <Button className="bg-red-600">Check</Button>
    </h1>
  )
}

export default App
