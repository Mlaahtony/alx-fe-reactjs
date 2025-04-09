import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="flex gap-4 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-16" alt="React logo" />
        </a>
      </div>

      <h1 className="text-3xl font-semibold mb-4 text-center">Vite + React</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-4 text-center">
        <button 
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          onClick={() => setCount(count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-4 text-sm text-gray-500">
          Edit <code className="font-mono">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-center text-gray-600 mt-4">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
export default App

