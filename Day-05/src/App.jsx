import React from 'react'
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
    
  function Increase() {
    setCount(count + 1);
  };

  function Decrease() {
    setCount(count - 1);
  };

  function Reset() {
    setCount(0);
  };

  return (

    <div className='bg-gray-900 h-screen text-center justify-center flex flex-col gap-40'>

      <div className='text-white text-6xl bg-gray-800 self-center rounded-xl px-6 py-4'>
        Count {count}
      </div>

      <div className='flex gap-9 self-center'>
        <button className='text-white bg-gray-800 text-4xl px-6 py-2 rounded' onClick={Increase}>Increase</button>

        <button className='text-white bg-gray-800 text-4xl px-6 py-2 rounded' onClick={Decrease}>Decrease</button>

        <button className='text-white bg-red-500 text-4xl px-6 py-2 rounded' onClick={Reset}>Reset</button>
      </div>

    </div>

  )
}

export default App
