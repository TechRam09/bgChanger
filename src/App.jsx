import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <div className=' h-screen w-full duration-200 ' style={{backgroundColor:color}}>
     
    </div>
  )
}

export default App
