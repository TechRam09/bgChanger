import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <div className=' h-screen w-full duration-200 ' style={{backgroundColor:color}}>
      <div className=" inset-x-0 p-5 flex flex-wrap m-5 fixed bottom-5 rounded-xl justify-center " >
        <div className="bg-white p-3 rounded-xl flex flex-wrap justify-center gap-5 border-2 border-black">
          <button className="rounded px-5 py-1 font-bold text-white" style={{background:'red'}} onClick={()=> setColor('red')}>Red</button>
          <button className="rounded px-5 py-1 font-bold text-white" style={{ background: 'Blue'}} onClick={()=> setColor('blue')}>Blue</button>
          <button className="rounded px-5 py-1 font-bold text-white" style={{ background: 'green'}} onClick={()=> setColor('green')}>Green</button>
          <button className="rounded px-5 py-1 font-bold text-white" style={{ background: 'olive'}} onClick={()=> setColor('olive')}>Olive</button>
          <button className="rounded px-5 py-1 font-bold text-white" style={{ background: 'grey'}} onClick={()=> setColor('grey')}>Grey</button>
          <button className="rounded px-5 py-1 font-bold text-white" style={{ background: 'Purple' }} onClick={() => setColor('Purple')}>Purple</button>
          <button className="rounded px-5 py-1 font-bold " style={{ background: 'pink' }} onClick={() => setColor('pink')}>Pink</button>
          <button className="rounded px-5 py-1 font-bold " style={{ background: 'yellow'}} onClick={()=> setColor('yellow')}>Yellow</button>
          
          <button className="rounded px-5 py-1 font-bold border-2 border-black" style={{ background: 'white' }} onClick={() => setColor('white')}>White</button>
          <button className="rounded px-5 py-1 font-bold border-2 border-black text-white" style={{ background: 'black' }} onClick={() => setColor('black')}>Black</button>
          
          
        </div>
      </div>
    </div>
  )
}

export default App
