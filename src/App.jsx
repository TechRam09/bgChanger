import { useState } from 'react'

import './App.css'

function App() {
  const [color, setcolor] = useState('black')

  return (
    <div className=' h-screen w-full duration-200 flex justify-center' style={{backgroundColor:color}}>
      <div className="  rounded fixed bottom-12 flex justify-center inset-x-0 flex-wrap items-center" style={{backgroundColor:'white'}}></div>

    </div>
  )
}

export default App
