
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")
  return (
    <>
      <div className='w-full h-screen duration-200'
        style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center abs
          bottom-12 inset-x-0 px-2'> 
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor: "red"}}>
            RED</button>
            <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor: "green"}}>
            Green</button>
            <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor: "blue"}}>
            Blue</button>
            <button onClick={()=>setColor("orange")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor: "orange"}}>
            Orange</button>
            <button onClick={()=>setColor("white")} className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
            style={{backgroundColor: "White"}}>
            White</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
