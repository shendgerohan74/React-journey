import React from 'react'
import { useState } from 'react'

const App = () => {
  const btnClicked = (e) => {
    if (title === '' || details === "") {
      alert("Please enter Title and Details")
    }

    const copyTask = [...tasks];
    copyTask.push({ title, details });
    setTasks(copyTask);

    setTitle('');
    setDetails('');
    e.preventDefault();
  }

  const deleteNode = (idx) => {
    const copyTask = [...tasks];
    copyTask.splice(idx, 1);

    setTasks(copyTask)
  }

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const [tasks, setTasks] = useState([]);




  return (
    <div className='flex lg:w-full flex-col lg:flex-row min-h-screen bg-gray-950 text-white'>
      <div className=' w-full lg:w-1/2 p-10 text-white lg:border-r-2'>
        <h1 className='text-4xl mb-5 font-bold'>Add Notes</h1>
        <form className='flex flex-col font-medium'
          onSubmit={(e) => {
            btnClicked(e)
          }}>

          {/* This is Title */}
          <input type="text"
            placeholder='Enter Heading...'
            className='px-10 py-2 border rounded m-2'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          {/* This is Details */}
          <textarea type="text"
            placeholder='Write down the Note'
            className='px-10 py-2 border rounded m-2 h-20'
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />

          <button
            className='bg-gray-900 rounded w-fit px-5 py-1 self-center text-white'
          >
            Add Note
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full p-10 overflow-y-scroll no-scrollbar h-screen'>
        <h1 className='text-4xl mb-5 font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-7'>
          {tasks.map(function (elem, idx) {

            return (
              <div key={idx} className='w-40 h-52 rounded-2xl text-black overflow-y-scroll no-scrollbar bg-amber-50 flex flex-col justify-between'>
                <div className='p-2 gap-1'>
                  <h2 className='text-2xl font-bold'>{elem.title}</h2>
                  <hr className='text-gray-300 m-1' />
                  <p className='font-medium text-gray-800 text-[12px]'>{elem.details}</p>
                </div>
                <button 
                onClick={() => deleteNode(idx)}
                className='mb-2 active:scale-95 active:bg-red-400 font-bold bg-red-500 self-center w-3/4 rounded'>Delete</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
