import React from 'react'
import './App.css'
import Card from './components/Card'

const App = () => {
  return (
    <div className='Parent'>
      <Card user="Rohan" age={19} />
      <Card user="Ajay" age={20}/>
      <Card user="Atharv" age={21}/>
      <Card user="Aniket" age={22}/>
    </div>
  )
}

export default App
