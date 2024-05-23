import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <div className=' h-screen w-full duration-200 ' style={{backgroundColor:color}}>
      <div className=" inset-x-0 p-5 flex flex-wrap m-5 fixed bottom-5 rounded-xl justify-center " >
        
      </div>
    </div>
  )
}

export default App
